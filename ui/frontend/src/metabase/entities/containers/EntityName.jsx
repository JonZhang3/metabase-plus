/* eslint-disable react/prop-types */
import React from "react";

import EntityObjectLoader from "./EntityObjectLoader";

import MetabaseSettings from "metabase/lib/settings";

const envs = MetabaseSettings.getEnvs();

function getEnvName(env) {
  return envs && envs[env] ? envs[env] : env;
}

const EntityName = ({ entityType, entityId, name = "name" }) => (
  <EntityObjectLoader
    entityType={entityType}
    entityId={entityId}
    properties={[name]}
    loadingAndErrorWrapper={false}
    wrapped
  >
    {({ object }) => (object ? <span>{`${object.getName()}${object.env && ' [' + getEnvName(object.env) + ']' }`}</span> : null)}
  </EntityObjectLoader>
);

export default EntityName;
