function FeatureCard({ title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{description}</div>
    </div>
  );
}

export default FeatureCard;