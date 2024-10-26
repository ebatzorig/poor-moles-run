import { Popover } from 'antd';
import Customavatar from './custom-avatar';
import { useGetIdentity } from '@refinedev/core';

import type { User } from '@/graphql/schema.types'

const CurrentUser = () => {

  const { data: user } = useGetIdentity<User>()
  
  return (
    <>
        <Popover
            placement='bottomRight'
            trigger="click"
            overlayInnerStyle={{ padding: 0 }}
            overlayStyle={{ zIndex: 999 }}
        >
          <Customavatar />
        </Popover>
    </>
  )
}

export default CurrentUser