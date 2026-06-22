// Investigaciones de servicio — Oro Constructores
// 165 servicios investigados individualmente
// Importa los 6 ficheros de batch (uno por grupo de verticales)

import { invServicesAB } from './services/invServicesAB'
import { invServicesCD } from './services/invServicesCD'
import { invServicesEF } from './services/invServicesEF'
import { invServicesGHI } from './services/invServicesGHI'
import { invServicesJKLM } from './services/invServicesJKLM'
import { invServicesLM } from './services/invServicesLM'
import { invServicesNO } from './services/invServicesNO'

export const serviceInvestigations = [
  ...invServicesAB,
  ...invServicesCD,
  ...invServicesEF,
  ...invServicesGHI,
  ...invServicesJKLM,  // J01-J09 + K01-K10
  ...invServicesLM,    // L01-L06 + M01-M09
  ...invServicesNO,
]
