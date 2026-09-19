import { blockContent } from './blockContent'
import { post } from './post'
import { author } from './author'
import { category } from './category'
import { codeBlock } from './code'
import { youtube } from './youtube'
import { faq } from './faq'
import { internalCTA } from './internalCTA'
import { latex } from './latex'
import { tableOfContents } from './tableOfContents'
import { homePage } from './homePage'
import { aboutPage } from './aboutPage'
import { experience } from './experience'
import { event } from './event'
import { eventsPage } from './eventsPage'
import { photo } from './photo'
import { engagement } from './engagement'
import leader from './leader'
import { industry } from './industry'
import { bannerCta } from './bannerCta'
import { service } from './service'
import { mediaFolder } from './mediaFolder'
import { mediaAsset } from './mediaAsset'
import { upcomingEvent } from './upcomingEvent'
import { eventRecognitionMedia } from './eventRecognitionMedia'
import { careerPage } from './career'
import clients from './clients'
import { newLetter } from './newLetter'

export const schemaTypes = [
    // Blog
    blockContent,
    post,
    author,
    category,
    // Block-content objects
    codeBlock,
    youtube,
    faq,
    internalCTA,
    latex,
    tableOfContents,
    // Other site content
    homePage,
    aboutPage,
    careerPage,
    newLetter,
    clients,
    experience,
    event,
    upcomingEvent,
    eventsPage,
    photo,
    eventRecognitionMedia,
    engagement,
    leader,
    industry,
    bannerCta,
    service,
    mediaFolder,
    mediaAsset,
]

export const schema = { types: schemaTypes }
