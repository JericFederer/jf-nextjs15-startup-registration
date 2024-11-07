import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/sanity/lib/client";

// * This is for real-time screen update whenever data changes
// * No reload needed
export const { sanityFetch, SanityLive } = defineLive({ client });
