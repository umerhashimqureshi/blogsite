import React, { useEffect } from "react";
import axios from "axios";
import { Input } from "antd";

const Check = () => {
  useEffect(() => {
    axios
      .get(
        "http://graph.facebook.com/1271653511?fields=business_discovery.username(bluebottle){followers_count, media_count}"
      ) //1271653511
      .then(function(data) {
        console.log(data);
      });
  });

  return (
    <div>
      <Input placeholder="CHECK BROOOOO" />
    </div>
  );
};

export default Check;
