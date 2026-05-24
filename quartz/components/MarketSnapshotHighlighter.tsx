import { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/market-snapshot.inline"

export default (() => {
  const MarketSnapshotHighlighter: QuartzComponent = () => {
    return <></>
  }

  MarketSnapshotHighlighter.afterDOMLoaded = script

  return MarketSnapshotHighlighter
}) satisfies QuartzComponentConstructor
