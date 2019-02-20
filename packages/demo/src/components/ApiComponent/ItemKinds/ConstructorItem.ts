import { Vue, Component, Prop } from 'vue-property-decorator';
import { ConstructorItem, ClassItem, ApiItem, Parameter } from '../ApiItem';

import ApiParameters from '../ApiParameters.vue';
import * as utility from '../utility';
import { Indexes } from 'packages/demo/src/store/modules/api';

@Component({
  components: { ApiParameters }
})
export class ConstructorItemComponent extends Vue {

  @Prop() classItem: ClassItem;
  item: ConstructorItem = null;
  indexes: Indexes;
  utility = utility;

  mounted() {
    this.indexes = this.$store.state.api.indexes;
    this.item = this.classItem.children.find((x) => {
      return x.kindString === 'Constructor';
    }) as ConstructorItem;
  }

  getSignaturesStr(item: ConstructorItem, ) {
    return this.utility.getConstructorSignatureStr(item, this.indexes);
  }
}
