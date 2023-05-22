import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import React, { useState } from "react";

function AvatarGenerator() {
  const [uri, setUri] = useState("");
  return {
    createCustomeAvatar: function (seed) {
      const avatar = createAvatar(loreleiNeutral, {
        seed: seed,
        size: 128,
      });
      avatar
        .png()
        .toDataUri()
        .then((res) => {
          setUri(res);
        });
      return uri;
    },
  };
}

export default AvatarGenerator;
