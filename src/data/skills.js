const skillCategoryDefinitions = [
  { id: "frontend", icon: "code" },
  { id: "backend-api", icon: "dns" },
  { id: "database", icon: "storage" },
  { id: "design-ux", icon: "palette" },
  { id: "tools", icon: "build" },
];

export function createSkillCategories(translatedCategories) {
  return skillCategoryDefinitions.map((categoryDefinition, categoryIndex) => {
    const translatedCategory = translatedCategories[categoryIndex];

    return {
      ...categoryDefinition,
      title: translatedCategory.name,
      skills: translatedCategory.skills.map((skill, skillIndex) => ({
        id: `${categoryDefinition.id}-${skillIndex}`,
        label: skill.name,
        category: categoryDefinition.id,
        description: skill.description,
      })),
    };
  });
}
