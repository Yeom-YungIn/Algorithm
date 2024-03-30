import {LinkedLIst} from "../../src/자료구조/linkedLIst";

test('linkedList', () => {
    const linkedList = new LinkedLIst();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    linkedList.find(3);
    linkedList.insert(5, 2)
    linkedList.printList();
})