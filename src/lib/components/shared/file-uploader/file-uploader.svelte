<script lang="ts" module>
    interface FileUploaderProps {
        maxFileSize?: number;
        acceptedFileTypes?: string[];
        maxFilesToUpload?: number;
        disable?: boolean;
        onFilesChange?: (files: File[]) => void;
    }
</script>

<script lang="ts">
    import IconUpload from "$lib/icons/icon-upload.svelte";
    import { cn } from "$lib/utils/utils";
    let {
        maxFileSize = 10 * 1024 * 1024, // 10 MB
        acceptedFileTypes = [".csv", ".pdf", ".xlsx"],
        maxFilesToUpload = 1,
        disable = false,
        onFilesChange = () => {},
    }: FileUploaderProps = $props();

    let dragOver = $state(false);
    let errorMessage = $state<string | null>(null);
    let filesToUpload = $state<File[]>([]);
    
    function processFile(files: FileList) {
        if (files.length > maxFilesToUpload) {
            errorMessage = `You can upload a maximum of ${maxFilesToUpload} file(s).`;
            return;
        }
        const filesArray: File[] = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.size > maxFileSize) {
                errorMessage = `File ${file.name} exceeds the maximum size of ${
                    maxFileSize / (1024 * 1024)
                } MB.`;
                return;
            }
            if (
                !acceptedFileTypes.some((type) =>
                    file.name.toLowerCase().endsWith(type.toLowerCase()),
                )
            ) {
                errorMessage = `File ${file.name} is not an accepted format. Supported formats: ${acceptedFileTypes.join(
                    ", ",
                )}.`;
                return;
            }
            filesArray.push(file);
        }
        errorMessage = null;
        filesToUpload = filesArray;
        onFilesChange(filesArray);
    }

    function handleFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            processFile(input.files);
        }
    }
    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        dragOver = true;
    }
    function handleDragLeave(event: DragEvent) {
        event.preventDefault();
        dragOver = false;
    }
    function handleDrop(event: DragEvent) {
        event.preventDefault();
        dragOver = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            processFile(files);
        }
    }
</script>
<div
    class={cn(
        "relative flex cursor-pointer select-none flex-col items-center focus-within:border-dashed focus-within:bg-surface-primary-l2 justify-center rounded-lg border p-32 transition-colors duration-200 ease-in-out hover:border-icon-action-default/50",
        errorMessage
            ? "border-destructive "
            : dragOver
              ? "border-dashed border-border-primary-action-default bg-surface-primary-l2"
              : "border-alphapure-black-25 bg-surface-neutral-l2",
        disable && "pointer-events-none opacity-50",
    )}
    role="button"
    tabindex="0"
    ondragover={handleDragOver}
    ondragleave={handleDragLeave}
    ondrop={handleDrop}
>
    <div class="flex flex-col items-center gap-16">
        <div
            class="w-40 h-40 bg-surface-primary-action-default rounded-full flex items-center justify-center [&>svg]:text-icon-action-on-active"
        >
            <IconUpload size={20} className="ms-2" />
        </div>
        <div class="flex flex-col gap-[0.375rem]">
            <div
                class="flex gap-[0.25rem] text-text-glass-primary capitalize text-p-small font-medium"
            >
                <span>Drag & Drop</span>
                <span>or</span>
                <span
                    class="text-icon-action-default underline underline-offset-2"
                    >Choose file</span
                >
                <span>to upload</span>
            </div>
            <p
                class="text-p-xsmall font-normal text-text-glass-secondary text-center"
            >
                <span>Supported formats:</span>
                <span class="uppercase">{acceptedFileTypes.join(", ")} </span>
            </p>
            <p
                class="text-p-xxsmall font-normal text-text-glass-secondary text-center"
            >
                <span>Max file size: {maxFileSize / (1024 * 1024)} MB</span>
                <span
                    >• {maxFilesToUpload > 1
                        ? `Max ${maxFilesToUpload} files`
                        : "Single file"}</span
                >
            </p>
            {#if errorMessage}
                <p class="mt-8 text-p-xsmall font-medium text-destructive">
                    {errorMessage}
                </p>
            {/if}
        </div>
    </div>
    <input
        type="file"
        onchange={handleFileChange}
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        accept={acceptedFileTypes.join(",")}
        disabled={disable}
        multiple={maxFilesToUpload > 1}
    />
</div>
