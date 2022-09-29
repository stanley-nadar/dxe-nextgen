import Container from 'quarks/Container';

import type { FC, ReactElement, ReactNode } from 'react';

type ComponentWrapper = { title?: string; componentWrapper?: FC };

const wrapRichTextElements = (richData: ReactElement[], components: ComponentWrapper[]) => {
  let elementArray: ReactNode[] = [];

  const formattedBodyData = richData?.map((node, index) => {
    const type = node?.props?.__typename;

    if (!type) {
      return node;
    }
    const prevType = richData[index - 1]?.props?.__typename;
    const nextType = richData[index + 1]?.props?.__typename;

    if (components?.some(component => component.title === type)) {
      if (type !== prevType && type !== nextType && type) {
        return node;
      } else if (type !== prevType) {
        elementArray = [node];

        return;
      } else if (nextType === prevType) {
        elementArray = [...elementArray, node];

        return;
      } else if (type !== nextType) {
        const Wrapper = components?.filter(component => component.title === type)[0].componentWrapper;
        const ElementWrapper = Wrapper ? Wrapper : Container;
        elementArray = [...elementArray, node];

        return <ElementWrapper key={node.key}>{elementArray}</ElementWrapper>;
      }
    }

    return node;
  });

  return formattedBodyData;
};

export default wrapRichTextElements;
