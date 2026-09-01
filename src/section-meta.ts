import { workspaces } from "./workspaces";

export interface SectionMeta {
	category: string;
	description: string;
}

export const sectionMeta: Record<string, SectionMeta> = workspaces.reduce(
	(acc, w) => {
		acc[w.id] = { category: w.category, description: w.description };
		return acc;
	},
	{} as Record<string, SectionMeta>,
);
