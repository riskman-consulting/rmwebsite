import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { table } from "@sanity/table";

import { projectId, dataset, apiVersion } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

// Document types that should exist only once (no "create new" / delete)
// Only these two exist in the dataset under a fixed document id.
const singletonTypes = new Set(["homePage", "aboutPage"]);

// Actions allowed on singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Types rendered by their own list item below, so they are not repeated in the fallback list
const customListedTypes = [
  "leader",
  "event",
  "upcomingEvent",
  "photo",
  "engagement",
  "mediaFolder",
  "mediaAsset",
];

export default defineConfig({
  name: "default",
  title: "RiskMan Studio",
  basePath: "/cms",

  projectId,
  dataset,
  apiVersion,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ---------- Singleton pages ----------
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .icon(() => "🏠")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .icon(() => "ℹ️")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.divider(),

            // ---------- People ----------
            S.listItem()
              .title("Team Members")
              .icon(() => "👥")
              .schemaType("leader")
              .child(S.documentTypeList("leader").title("All Team Members")),

            S.divider(),

            // ---------- Events & media ----------
            S.listItem()
              .title("Events & Galleries")
              .icon(() => "📸")
              .schemaType("event")
              .child(S.documentTypeList("event").title("All Events")),
            S.listItem()
              .title("Upcoming Events")
              .icon(() => "⏳")
              .schemaType("upcomingEvent")
              .child(S.documentTypeList("upcomingEvent").title("All Upcoming Events")),
            S.listItem()
              .title("Moments That Matter")
              .icon(() => "✨")
              .schemaType("photo")
              .child(S.documentTypeList("photo").title("All Photos")),
            S.listItem()
              .title("Global Engagements")
              .icon(() => "🌏")
              .schemaType("engagement")
              .child(S.documentTypeList("engagement").title("All Engagements")),

            S.divider(),

            // ---------- Media library ----------
            S.listItem()
              .title("Media Folders")
              .icon(() => "📁")
              .schemaType("mediaFolder")
              .child(S.documentTypeList("mediaFolder").title("All Media Folders")),
            S.listItem()
              .title("Media Assets")
              .icon(() => "🖼️")
              .schemaType("mediaAsset")
              .child(S.documentTypeList("mediaAsset").title("All Media Assets")),

            S.divider(),

            // ---------- Everything else ----------
            ...S.documentTypeListItems().filter((listItem) => {
              const id = listItem.getId() || "";
              return !singletonTypes.has(id) && !customListedTypes.includes(id);
            }),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    table(),
  ],

  schema: {
    types: schemaTypes,
    // Hide singletons from the global "New document" menu
    templates: (templates) =>
      templates.filter((template) => !singletonTypes.has(template.schemaType)),
  },

  document: {
    // Singletons can only be published / reverted, never created or deleted
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
