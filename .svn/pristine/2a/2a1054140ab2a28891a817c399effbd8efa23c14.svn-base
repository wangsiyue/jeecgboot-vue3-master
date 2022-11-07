import LogicFlow, { BaseNodeModel } from '@logicflow/core';
import GroupNode from './GroupNode';
declare type BaseNodeId = string;
declare type GroupId = string;
declare type Bounds = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
declare class Group {
    static pluginName: string;
    lf: LogicFlow;
    activeGroup: any;
    nodeGroupMap: Map<BaseNodeId, GroupId>;
    constructor({ lf }: {
        lf: any;
    });
    /**
     * 获取一个节点内部所有的子节点，包裹分组的子节点
     */
    getNodeAllChild(model: any): any[];
    graphRendered: (data: any) => void;
    appendNodeToGroup: ({ data }: {
        data: any;
    }) => void;
    deleteGroupChild: ({ data }: {
        data: any;
    }) => void;
    setActiveGroup: ({ data }: {
        data: any;
    }) => void;
    /**
     * 获取自定位置其所属分组
     */
    getGroup(bounds: Bounds): BaseNodeModel | undefined;
    /**
     * 获取某个节点所属的groupModel
     */
    getNodeGroup(nodeId: any): BaseNodeModel;
}
export { Group, GroupNode, };
