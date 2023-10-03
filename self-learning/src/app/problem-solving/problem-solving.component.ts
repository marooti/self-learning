import { Component } from '@angular/core';
import { BinarySearchTreeService } from '../binary-search-tree.service';
class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(public value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
@Component({
  selector: 'app-problem-solving',
  templateUrl: './problem-solving.component.html',
  styleUrls: ['./problem-solving.component.scss']
})
export class ProblemSolvingComponent {
  // Two Sum

  // Tree Node
  root: TreeNode | null = null;

  constructor() { }

  ngOnInit(): void {

    // Create a binary search tree
    this.root = this.insert(this.root, 10);
    this.root = this.insert(this.root, 5);
    this.root = this.insert(this.root, 15);

    // Search for a value
    const result = this.search(this.root, 5);
    if (result) {
      console.log(`Found value: ${result.value}`);
    } else {
      console.log(`Value not found.`);
    }
  }

  insert(root: TreeNode | null, value: number): TreeNode {
    if (!root) {
      return new TreeNode(value);
    }

    if (value < root.value) {
      root.left = this.insert(root.left, value);
    } else {
      root.right = this.insert(root.right, value);
    }

    return root;
  }

  search(root: TreeNode | null, value: number): TreeNode | null {
    if (!root || root.value === value) {
      return root;
    }

    if (value < root.value) {
      return this.search(root.left, value);
    }

    return this.search(root.right, value);
  }

  twoSumResultFunction() {
    // Two Sum
    const nums = [2, 7, 11, 15];
    const target = 9;
    const twoSumResult = this.twoSum(nums, target);
    if (twoSumResult !== null) {
      console.log(`Indices of two numbers that add up to ${target}: [${twoSumResult}]`);
    } else {
      console.log(`No solution found.`);
    }
  }

  // Two Sum
  twoSum(nums: number[], target: number) {
    // Create a map to store the numbers and their indices
    const numMap = new Map<number, number>();
    console.log("Map Value :", numMap)
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      console.log("complemet :", complement)
      // Check if the complement exists in the map
      if (numMap.has(complement)) {
        // Return the indices of the two numbers
        return [numMap.get(complement)!, i];
      }

      // Store the current number and its index in the map
      numMap.set(nums[i], i);
    }

    // If no solution is found, return null
    return null;
  }

}
