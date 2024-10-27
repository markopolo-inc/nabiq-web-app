export const getCodes = ({ platform, link, isShopify = false, clientId = undefined }) => {
  const options = {
    consent: true,
    ...(isShopify && { shopify: true }),
  };

  const codesList = {
    facebook: `<script>
	  window.mtrem = window.mtrem || [];
	  function mtag() { mtrem.push(arguments) };
	  mtag("init", "https://${link}${clientId ? `?tagId=${clientId}` : ''}", ${JSON.stringify(options)});
	  mtag("event", { type: "ViewContent" });
  </script>
  <script async type="text/javascript" src="https://${link}/script" />`,
  };

  return codesList[platform] || `No code`;
};
