// Taken from homework 10

import {
    for_each, filter,
    List,
    list,
    append
} from '../lib/list';

import {
    type Queue, empty, is_empty, enqueue, dequeue, head as qhead
} from '../lib/queue_array';
import {
    ListGraph
} from "../lib/graphs";

// Build an array based on a function computing the item at each index
function build_array<T>(size: number, content: (i: number) => T): Array<T> {
    const result = Array<T>(size);
    for (var i = 0; i < size; i = i + 1) {
        result[i] = content(i);
    }
    return result;
}

/**
 * Node colours for traversal algorithms
 * @constant white an unvisited node
 * @constant grey a visited but not finished node
 * @constant black a finished node
 */
const white = 1;
const grey = 2;
const black = 3;

/**
 * Computes a shortest path between two nodes in a ListGraph.
 * Returns one of possibly several paths.
 * @param lg the list graph
 * @param initial the id of the starting node
 * @param end the id of the end node
 * @returns A list with the nodes on one shortest path from initial to end,
 *          with initial and end included. If no such path exists, returns
 *          the empty list.
 */
export function lg_shortest_path({adj, size}: ListGraph,
                                 initial: number, end: number): List<number> {

    // YOUR TASK: modify the original BFS code below.
    // Do NOT modify the function signature.

    let result: List<number> = null;  // nodes in the order they are being visited
    const pending: Queue<number> = empty<number>();  // grey nodes to be processed
    const colour: Array<number> = build_array(size, _ => white);

    const path_to_node: Array<List<number>> = build_array(size, _ => list());

    // visit a white node
    function bfs_visit(path: List<number>): (current: number) => void {
        return current => {
            path_to_node[current] = append(path, list(current));
            colour[current] = grey;
            enqueue(current, pending);
        }
    }

    // paint initial node grey (all others are initialized to white)
    if (!(initial >= size || initial < 0)) {
        bfs_visit(path_to_node[initial])(initial);
    } else {}

    while (!is_empty(pending)) {
        // dequeue the head node of the grey queue
        const current: number = qhead(pending);
        dequeue(pending);

        if (current === end) {
            result = path_to_node[current];
            break;
        } else {}

        // Paint all white nodes adjacent to current node grey and enqueue them.
        const adjacent_white_nodes: List<number> = filter(node => colour[node] === white,
                                                          adj[current]);
        for_each(bfs_visit(path_to_node[current]), adjacent_white_nodes);

        // paint current node black; the node is now done.
        colour[current] = black;
    }

    return result;
}