import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { TLanguageInput } from 'src/library/types'
import { LANGUAGE_MODULE } from 'src/modules/language'
import LanguageModuleService from 'src/modules/language/service'

export const updateLanguageStep = createStep(
  'update-language-step',
  async (input: TLanguageInput, { container }) => {
    const languageModuleService: LanguageModuleService = container.resolve(LANGUAGE_MODULE)

    const language = await languageModuleService.updateLanguages(input)

    return new StepResponse(language, language.id)
  },
  async (id: string, { container }) => {
    const languageModuleService: LanguageModuleService = container.resolve(LANGUAGE_MODULE)

    await languageModuleService.deleteLanguages(id)
  },
)