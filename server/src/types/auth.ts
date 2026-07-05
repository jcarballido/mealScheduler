import z from "zod";

export const AccessRequestSchema = z.object({
  email: z.string()
})

export const MagicLinkRequestSchema = z.object({
  requestApproved: z.boolean()
})

export type AccessRequest = z.infer<typeof AccessRequestSchema>
export type MagicLinkRequest = z.infer<typeof MagicLinkRequestSchema>
