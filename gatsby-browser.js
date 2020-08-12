import "./src/styles/reset.css";
import "./src/styles/common.css";
import "./src/styles/style.css";

import { registerLinkResolver } from "gatsby-source-prismic-graphql";
import linkResolver from "./src/utils/linkResolver";

registerLinkResolver(linkResolver);

// auto-reload when new content available
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
