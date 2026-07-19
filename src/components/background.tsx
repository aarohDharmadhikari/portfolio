export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void"
    >
      {/* Base vertical vignette so content stays readable at every scroll depth */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Faint blueprint grid, fades out toward the bottom of the viewport */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Two slow-drifting glow blobs — the only continuous motion on the page */}
      <div
        className="absolute -top-40 left-[8%] h-[38rem] w-[38rem] rounded-full bg-emerald-deep/30 blur-[140px] animate-drift-slow"
      />
      <div
        className="absolute top-[40%] right-[4%] h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[160px] animate-drift-slower"
      />

      {/* Subtle bottom fade so footer content never fights the glow */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-void to-transparent" />
    </div>
  );
}
