export function initializeFilePaste(fileDropContainer, inputFile) {

    fileDropContainer.addEventListener('paste', onPaste);

    function onPaste(event) {
        inputFile.files = event.clipboardData.files;
        const changeEvent = new Event('change', { bubbles: true });
        inputFile.dispatchEvent(changeEvent);
    }

    return {
        dispose: () => {
            fileDropContainer.removeEventListener('paste', onPaste);
        }
    }

}