import ContentLoader from 'react-content-loader';

export const Loader = props => {
  return (
    <ContentLoader viewBox="0 0 500 300" height={300} width={500} {...props}>
      <rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
      <circle cx="492" cy="16" r="8" />
      <circle cx="472" cy="16" r="8" />
      <rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

      <rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
      <rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
      <rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
      <rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
      <rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
      <rect x="254" y="39" rx="0" ry="0" width="34" height="8" />

      <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

      <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

      <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
      <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
      <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
      <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
      <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
      <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
    </ContentLoader>
  );
};

export const LoaderPage = props => {
  return (
    <ContentLoader
      viewBox="0 0 400 160"
      height={160}
      width={400}
      backgroundColor="transparent"
      {...props}
    >
      <circle cx="150" cy="86" r="8" />
      <circle cx="194" cy="86" r="8" />
      <circle cx="238" cy="86" r="8" />
    </ContentLoader>
  );
};
