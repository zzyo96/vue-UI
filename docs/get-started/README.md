---
title: 快速上手
---

# 快速上手

```vue
<g-button>默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```

```javascript
import {Button,ButtonGroup,Icon} from 'vue-ui-zzyo'
import 'vue-ui-zzyo/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button':Button,
    'g-icon':Icon
  }
}
```