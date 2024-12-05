import readYamlFile from 'read-yaml-file';
import path from 'path';

export interface TemplateConfig {
  site?: {
    title?: string;
    description?: string;
  }
  personal?: {
    name?: string
    avatar?: string
    socialNetworks?: Partial<Record<'github' | 'instagram' | 'linkedin' | 'twitter', string>>
  }
}

export async function withTemplateConfig() {
  const templateConfig = await readYamlFile<TemplateConfig>(path.resolve('.', 'template-config.yml'));

  return templateConfig
}
