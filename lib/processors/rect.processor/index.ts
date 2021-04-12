import { CGRectManifest } from "@reflect-ui/core/lib/rect";
interface RectParameter {}

interface ProcessorOption {
  /**
   * the target number of variants you are willing to generate of this ui component / atom
   */
  generate: number;
}

export function processRect(
  options: RectParameter,
  processorOption: ProcessorOption
) {}
