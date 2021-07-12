//Retrieve Elements
const executeCodeBtn = document.querySelector('.editor__run');
const resetCodeBtn = document.querySelector('.editor__reset');

// Intial  on Code Editor
const msg_cpp = `#include <bits/stdc++.h>
using namespace std;

int main() {
    // write your code here
    
}`;

const msg_c = `#include <stdio.h>
#include <stdlib.h>

int main() {
	// write your code here
	
}`;

const msg_java = `import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        // write your code here
        
	}
}`;

const msg_kotlin = `import java.util.*
fun main(args: Array<String>) {
    // write your code here

}`;

const msg_python = `# write your code here
`;

const msg_php = `<?php
// write your code here

?>`;

const msg_js = `// write your code here
`;


// Ace Setup
let codeEditor = ace.edit("editorCode");
codeEditor.setTheme("ace/theme/merbivore_soft");
codeEditor.session.setMode("ace/mode/c_cpp");
codeEditor.setValue(msg_cpp);

// On Selecting Language
function changeFunc() {
    var selectBox = document.getElementById("lang");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue === "C++"){
        codeEditor.session.setMode("ace/mode/c_cpp");
        codeEditor.setValue(msg_cpp);
    }
    else if(selectedValue === "C"){
        codeEditor.session.setMode("ace/mode/c_cpp");
        codeEditor.setValue(msg_c);
    }
    else if(selectedValue === "Java"){
        codeEditor.session.setMode("ace/mode/java");
        codeEditor.setValue(msg_java);
    }
    else if(selectedValue === "Kotlin"){
        codeEditor.session.setMode("ace/mode/kotlin");
        codeEditor.setValue(msg_kotlin);
    }
    else if(selectedValue === "Python"){
        codeEditor.session.setMode("ace/mode/python");
        codeEditor.setValue(msg_python);
    }
    else if(selectedValue === "PHP"){
        codeEditor.session.setMode("ace/mode/php");
        codeEditor.setValue(msg_php);
    }
    else if(selectedValue === "JS"){
        codeEditor.session.setMode("ace/mode/javascript");
        codeEditor.setValue(msg_js);
    }
}

let editorLib = {
    init() {
        //set options
        codeEditor.setOptions({
            // fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,

        })
    }
}

// Custom Input
function onCheckboxChanged(checked){
    if(checked==true)
        $("#hiddenCustomInput").fadeIn();
        
    else $("#hiddenCustomInput").fadeOut();
}

// Reset Button
resetCodeBtn.addEventListener('click',() => {
    //clear code editor
    codeEditor.setValue('');
})

//Run Button
executeCodeBtn.addEventListener('click', () => {

    //get input from code editor
    const userCode = codeEditor.getValue();

    //run userCode
    try {
        new Function(userCode)();
    } catch (err) {
        console.error(err);
    }
})

editorLib.init()