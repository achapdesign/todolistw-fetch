import React, { useSyncExternalStore } from 'react'

function Library() {
    const isConnected = useSyncExternalStore (
      storeApi.subscribe,
      ()=> storeApi.getStatus()=== 'connected',
      true
    );
  return (
    <div> Library</div>
  )
}

export default Library