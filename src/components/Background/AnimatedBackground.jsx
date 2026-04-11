import './AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__mesh" />
      <div className="animated-bg__grid" />
      <div className="animated-bg__texture" />
      <div className="animated-bg__vignette" />
    </div>
  );
}
