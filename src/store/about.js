import { create } from "zustand";
import { sanityClient } from "../api/sanity";

const BASE = `*[_type == "aboutPage"][0]`;

export const useAboutPage = create((set) => ({

  // ================= STATE =================
  serviceLeaders: [],
  clientsSection: [],
  alliancePartnersSection: [],
  teamMembersSection: [],

  loading: false,
  error: null,

  // ================= FETCHERS =================

  fetchServiceLeaders: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        serviceLeaders[]{
          ...,
          image{alt, asset->{url}}
        }
      }`);

      set({
        serviceLeaders: data?.serviceLeaders ?? [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchClients: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        clientsSection[]{
          name,
          logo{alt, asset->{url}}
        }
      }`);

      set({
        clientsSection: data?.clientsSection ?? [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchAlliancePartners: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        alliancePartnersSection[]{
          ...,
          image{alt, asset->{url}}
        }
      }`);

      set({
        alliancePartnersSection: data?.alliancePartnersSection ?? [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  fetchTeamMembers: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        teamMembersSection
      }`);

      set({
        teamMembersSection: data?.teamMembersSection ?? [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },

  // ✅ optional — fetch all at once
  fetchAllAbout: async () => {
    try {
      set({ loading: true, error: null });

      const data = await sanityClient.fetch(`${BASE}{
        serviceLeaders[]{..., image{alt, asset->{url}}},
        clientsSection[]{name, logo{alt, asset->{url}}},
        alliancePartnersSection[]{..., image{alt, asset->{url}}},
        teamMembersSection
      }`);

      set({
        serviceLeaders: data?.serviceLeaders ?? [],
        clientsSection: data?.clientsSection ?? [],
        alliancePartnersSection: data?.alliancePartnersSection ?? [],
        teamMembersSection: data?.teamMembersSection ?? [],
        loading: false
      });

    } catch (e) {
      set({ error: e.message, loading: false });
    }
  },
   fetchLeaders: async () => {
    try {
      const data = await sanityClient.fetch(`
        *[_type == "leader"]{
          name,
          title,
          linkedin,
          image{
            asset->{url}
          }
        }
      `);

      set({ teamMembersSection: data });

    } catch (e) {
      set({ error: e.message });
    }
  },

}));