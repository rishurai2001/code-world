import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import { SubmitService } from 'src/app/core/services/submit.service';
 
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {

  @ViewChild('editor') private editorElmRef!: ElementRef<HTMLDivElement>;
  @Input() problemId: any;
  @Input() contestId: any;
  
  modeSelector!: HTMLSelectElement;
  editor!: ace.Ace.Editor;
  submissionResult:string="Mazama gouazcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDraMazama gouazcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDraMazama gouazcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDraMazama gouazcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDraMazama gouazcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragcdkDragoubiraProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.";
  showResult: boolean = false;
  constructor(private elementRef: ElementRef,
            private submitService: SubmitService) { }

  ngOnInit() {

    
    const editorElmRef = this.elementRef.nativeElement.querySelector('#editor');

    const editor = ace.edit(editorElmRef);
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
    console.log(editor.getValue());

    this.editor = editor;

    // get reference to mode selector element
    this.modeSelector = this.elementRef.nativeElement.querySelector('#mode-selector');

    // add event listener to mode selector
    if (this.modeSelector) {
      this.modeSelector.addEventListener('change', (event) => {
        const mode = (event.target as HTMLInputElement).value;
        console.log(mode)
        this.editor.session.setMode(`ace/mode/${mode}`);
      });
    }
  }

  submitSolution(){
    if(this.contestId)
        {
          console.log("Incontest")
        }
    else{
        this.submitService.submitInPractice(this.problemId,"","");
        console.log("Inpractice")
       }
  }
  
  
}






   