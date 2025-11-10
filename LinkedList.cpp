#include <iostream>
using namespace std;

struct node {
	int data;
	struct node* next;
};

void Push(struct node** headRef, int data) {
	struct node* newNode = new struct node;
	newNode->data = data;
	newNode->next = *headRef;
	*headRef = newNode;
}

void Print(struct node* head) {
	struct node* current = head;
	while (current != NULL) {
		cout << current->data << " ";
		current = current->next;
	}
}

void PrintRecursive(struct node* head) {
	if (head == NULL) return;
	cout << head->data << " ";
	PrintRecursive(head->next);
}

int Length(struct node* head) {
	int counter = 0;
	struct node* current = head;
	while (current != NULL) {
		current = current->next;
		counter++;
	}
	return counter;
}

void AddToEnd(struct node** headRef, int data) {
	struct node* current = *headRef;
	if (current == NULL) {
		Push(headRef, data);
	} else {
		while (current->next != NULL) {
			current = current->next;
		}
		struct node* newNode = new struct node;
		newNode->data = data;
		newNode->next = NULL;
		current->next = newNode;
	}
}

struct node* FindFromTheEnd(struct node* head, int k) {
	struct node* current = head;
	int size = 0;
	while (current != NULL) {
		current = current->next;
		size++;
	}
	if (k <= 0 || k > size) return NULL;
	current = head;
	for (int i = 0; i < (size - k); i++) {
		current = current->next;
	}
	return current;
}

struct node* FindFromTheEndPointers(struct node* head, int k) {
	if (head == NULL || k <= 0) return NULL;
	struct node* current = head;
	struct node* runner = head;

	for (int i = 0; i < k; i++) {
		if (runner == NULL) return NULL; // k > length
		runner = runner->next;
	}

	while (runner != NULL) {
		runner = runner->next;
		current = current->next;
	}
	return current;
}

void InsertSorted(struct node** headRef, int data) {
	struct node* newNode = new struct node;
	newNode->data = data;
	newNode->next = NULL;

	struct node* current = *headRef;

	// empty list or insert at head
	if (current == NULL || current->data > data) {
		newNode->next = *headRef;
		*headRef = newNode;
	} else { // in middle or at end
		while (current->next != NULL && current->next->data < data) {
			current = current->next;
		}
		newNode->next = current->next;
		current->next = newNode;
	}
}


bool RemoveNode(struct node** headRef, int data){
	struct node* current = *headRef;
	struct node* prev = NULL;

	//if target is located at the head
	if( (*headRef)->data == data){
		prev = *headRef;
		*headRef = (*headRef)->next;
		delete prev;
		return true;
	}else{ //if target is located in the middle or at end

		while(current != NULL){
			if(current->data == data){ //found
				prev->next = current->next;
				delete current;
				return true;
			}
			prev = current;
			current = current->next;
		}
	}
	return false;
}

bool RemoveDuplicatesSorted(struct node* head) {
	bool removed = false;
	struct node* current = head;
	struct node* temp;
	while (current != NULL && current->next != NULL) {
		if (current->data == current->next->data) {
			temp = current->next;
			current->next = current->next->next;
			delete temp;
			removed = true;
		} else {
			current = current->next;
		}
	}
	return removed;
}

// -------------------------------------------------------
// Merge two sorted lists in place
// No new nodes or Push/InsertSorted allowed
// -------------------------------------------------------
struct node* MergeSorted(struct node* head1, struct node* head2) {
	if (head1 == NULL) return head2;
	if (head2 == NULL) return head1;

	struct node* mergedHead = NULL;

	//TODO

	return mergedHead;
}

// -------------------------------------------------------
// Reverse a linked list (in-place)
// No new nodes or Push allowed
// -------------------------------------------------------
void ReverseList(struct node** headRef) {
	//TODO
}

int main() {
	struct node* head1 = NULL;
	struct node* head2 = NULL;

	InsertSorted(&head1, 5);
	InsertSorted(&head1, 8);
	InsertSorted(&head1, 2);
	InsertSorted(&head1, 10);
	InsertSorted(&head1, 1);
	InsertSorted(&head1, 3);

	InsertSorted(&head2, 6);
	InsertSorted(&head2, 9);
	InsertSorted(&head2, 4);
	InsertSorted(&head2, 7);
	InsertSorted(&head2, 11);

	cout << "List 1: ";
	PrintRecursive(head1);
	cout << endl;

	cout << "List 2: ";
	PrintRecursive(head2);
	cout << endl;

	struct node* mergedHead = MergeSorted(head1, head2);
	cout << "Merged Sorted List: ";
	PrintRecursive(mergedHead);
	cout << endl;

	ReverseList(&mergedHead);

	cout << "Reversed Merged List: ";
	PrintRecursive(mergedHead);
	cout << endl;

	/*
	if (RemoveNode(&mergedHead, 61) == true) {
		cout << "Remove (61): ";
		Print(mergedHead);
		cout << endl;
	} else {
		cout << "Remove (61) is not found " << endl;
	}


	cout << "Print (recursive): ";
	PrintRecursive(mergedHead);
	cout << endl;

	cout << "Length: " << Length(mergedHead) << endl;

	AddToEnd(&mergedHead, 4);
	cout << "AddToEnd(4): ";
	Print(mergedHead);
	cout << endl;

	cout << "FindFromTheEnd(2): " << FindFromTheEnd(mergedHead, 2)->data;
	cout << endl;

	cout << "FindFromTheEndPointers(2): " << FindFromTheEndPointers(mergedHead, 2)->data;
	cout << endl;
	*/
	return 0;
}
