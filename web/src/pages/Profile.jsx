import React from'react';export default function Profile(){return <pre>{JSON.stringify(JSON.parse(localStorage.user||'null'),null,2)}</pre>}
