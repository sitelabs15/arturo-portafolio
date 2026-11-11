/**
 * Fixed ambient lighting layer: deep black base, soft violet/magenta orbs and
 * a faint noise texture. Purely decorative and pointer-events free.
 */
export function AmbientBackground() {
  return (
    <div className="ambient-canvas" aria-hidden="true">
      <div className="ambient-orb ambient-orb--violet" />
      <div className="ambient-orb ambient-orb--magenta" />
      <div className="ambient-orb ambient-orb--blue" />
      <div className="ambient-vignette" />
      <div className="ambient-noise" />
    </div>
  );
}
