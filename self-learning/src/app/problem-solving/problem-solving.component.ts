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
  // Add Two Sum
  firstNum: any;
  secondNum: any;
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
  // Two Sum
  twoSum() {
    const nums = [2, 7, 11, 15];
    const target = 9;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + nums[i + 1] == target) {
        console.log("These indices have values that sum up to the target:", [nums[i], nums[i + 1]]);
      }
    }
  }
  // Add Two Sum
  addTwoNum() {
    let val = parseFloat(this.firstNum);
    let val1 = parseFloat(this.secondNum);
    let sum = val + val1;
    console.log("sum of two num:", sum)
  }

}
