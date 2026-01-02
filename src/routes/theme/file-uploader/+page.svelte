<script lang="ts">
	import FileUploader from "$lib/components/shared/file-uploader/file-uploader.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import * as Item from "$lib/components/ui/item/index.js";
	import Progress from "$lib/components/ui/progress/progress.svelte";
    import IconPdf from "$lib/icons/icon-pdf.svelte";
    import IconPhoto from "$lib/icons/icon-photo.svelte";
    import IconVideo from "$lib/icons/icon-video.svelte";
    import IconCross from "$lib/icons/icon-cross.svelte";


	let files = $state<File[]>([]);
	let maxFiles = $state(3);
	let maxSize = $state(10);
	let acceptedTypes = $state<string[]>([".pdf", ".csv", ".xlsx"]);
	let copiedCode = $state("");

	const card = "rounded-xl border bg-gradient-to-br from-card to-muted/20";
	const buttonToggle = "px-3 py-2 text-sm rounded-lg border-2 transition-all hover:scale-105";

	const fileTypeOptions = [
		{ value: ".pdf", label: "PDF" },
		{ value: ".csv", label: "CSV" },
		{ value: ".xlsx", label: "Excel" },
		{ value: ".doc", label: "DOC" },
		{ value: ".docx", label: "DOCX" },
		{ value: ".jpg", label: "JPG" },
		{ value: ".png", label: "PNG" },
		{ value: ".mp4", label: "MP4" },
		{ value: ".mp3", label: "MP3" },
	];

	function copyCode(code: string) {
		navigator.clipboard.writeText(code);
		copiedCode = code;
		setTimeout(() => (copiedCode = ""), 2000);
	}

	function handleRemoveFile(index: number) {
		files = files.filter((_, i) => i !== index);
	}

	function getFileIcon(fileName: string) {
		const ext = fileName.toLowerCase().split(".").pop();
		switch (ext) {
			case "pdf":
				return IconPdf;
			case "csv":
			case "xlsx":
			case "xls":
				return IconPdf;
			case "jpg":
			case "jpeg":
			case "png":
			case "gif":
				return IconPhoto;
			case "mp4":
			case "mov":
			case "avi":
				return IconVideo;
			case "mp3":
			case "wav":
				return IconPdf;
			default:
				return IconPdf;
		}
	}

	function toggleFileType(type: string) {
		if (acceptedTypes.includes(type)) {
			acceptedTypes = acceptedTypes.filter((t) => t !== type);
		} else {
			acceptedTypes = [...acceptedTypes, type];
		}
	}

	function getFileUploaderCode() {
		const maxSizeBytes = maxSize * 1024 * 1024;
		const typesAttr =
			acceptedTypes.length > 0 ? ` acceptedFileTypes={${JSON.stringify(acceptedTypes)}}` : "";
		const maxFilesAttr = maxFiles !== 1 ? ` maxFilesToUpload={${maxFiles}}` : "";
		const maxSizeAttr = maxSize !== 10 ? ` maxFileSize={${maxSizeBytes}}` : "";
		return `<FileUploader
  onFilesChange={(newFiles) => (files = [...files, ...newFiles])}${typesAttr}${maxFilesAttr}${maxSizeAttr}
/>`;
	}

	const basicCode = `import FileUploader from "$lib/components/shared/file-uploader/file-uploader.svelte";

let files = $state<File[]>([]);

<FileUploader
  onFilesChange={(newFiles) => (files = [...files, ...newFiles])}
  maxFilesToUpload={3}
  acceptedFileTypes={[".pdf", ".csv", ".xlsx"]}
  maxFileSize={10 * 1024 * 1024}
/>`;

	const withPreviewCode = `{#each files as file, index}
  <Item.Root variant="outline">
    <Item.Media variant="icon">
      <FileIcon class="size-4" />
    </Item.Media>
    <Item.Content>
      <Item.Title>{file.name}</Item.Title>
      <Item.Description>
        {(file.size / 1024).toFixed(2)} KB
      </Item.Description>
    </Item.Content>
    <Item.Actions>
      <Button 
        variant="ghost" 
        size="sm" 
        onclick={() => handleRemoveFile(index)}
      >
        <XIcon class="size-4" />
      </Button>
    </Item.Actions>
  </Item.Root>
{/each}`;
</script>

<div class="min-h-screen bg-gradient-to-b from-background to-muted/20">
	<div class="container max-w-6xl mx-auto px-6 py-12 space-y-16">
		<section class="space-y-6">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h1 class="text-3xl font-bold">File Uploader Playground</h1>
			</div>
			<p class="text-muted-foreground">
				Drag & drop file uploader with validation, file type restrictions, and size limits.
			</p>

			<div class="grid lg:grid-cols-2 gap-8">
				<div class="space-y-4">
					<div class={`${card} border-dashed p-8`}>
						<FileUploader
							onFilesChange={(newFiles) => (files = [...files, ...newFiles])}
							maxFilesToUpload={maxFiles}
							acceptedFileTypes={acceptedTypes}
							maxFileSize={maxSize * 1024 * 1024}
						/>

						{#if files.length > 0}
							<div class="mt-6 space-y-2">
								<div class="flex items-center justify-between mb-3">
									<span class="text-sm font-semibold">Uploaded Files ({files.length})</span>
									<Button variant="ghost" size="sm" onclick={() => (files = [])}>
										Clear All
									</Button>
								</div>
								{#each files as file, index}
									{@const IconComponent = getFileIcon(file.name)}
									<Item.Root variant="outline" size="sm">
										<Item.Media variant="icon">
											<IconComponent  />
										</Item.Media>
										<Item.Content>
											<Item.Title>{file.name}</Item.Title>
											<Item.Description>
												{(file.size / 1024).toFixed(2)} KB
											</Item.Description>
										</Item.Content>
										<Item.Actions>
											<Button
												variant="ghost"
												size="sm"
												class="size-8 p-0"
												onclick={() => handleRemoveFile(index)}
											>
												<IconCross />
											</Button>
										</Item.Actions>
									</Item.Root>
								{/each}
							</div>
						{/if}
					</div>

					<div class="rounded-lg border bg-card p-4 shadow-sm">
						<div class="flex items-center justify-between mb-3">
							<span class="text-sm font-semibold flex items-center gap-2">
								<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
								Generated Code
							</span>
							<button
								onclick={() => copyCode(getFileUploaderCode())}
								class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
							>
								{copiedCode === getFileUploaderCode() ? "✓ Copied!" : "Copy Code"}
							</button>
						</div>
						<pre
							class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{getFileUploaderCode()}</code></pre>
					</div>
				</div>

				<div class="space-y-6">
					<div class="space-y-3">
						<div class="text-sm font-semibold text-foreground">Max Files: {maxFiles}</div>
						<input type="range" bind:value={maxFiles} min="1" max="10" class="w-full accent-primary" />
					</div>

					<div class="space-y-3">
						<div class="text-sm font-semibold text-foreground">Max Size: {maxSize} MB</div>
						<input type="range" bind:value={maxSize} min="1" max="50" class="w-full accent-primary" />
					</div>

					<div class="space-y-3">
						<div class="text-sm font-semibold text-foreground">Accepted File Types</div>
						<div class="grid grid-cols-3 gap-2">
							{#each fileTypeOptions as option}
								<button
									onclick={() => toggleFileType(option.value)}
									class={`${buttonToggle} ${acceptedTypes.includes(option.value) ? "border-primary bg-primary/10 font-semibold shadow-sm" : "border-transparent bg-muted/50 hover:bg-muted"}`}
								>
									{option.label}
								</button>
							{/each}
						</div>
					</div>

					<div class="space-y-3">
						<div class="text-sm font-semibold text-foreground">Current Settings</div>
						<div class="rounded-lg border bg-muted/50 p-4 space-y-2">
							<div class="text-xs">
								<span class="text-muted-foreground">Max Files:</span>
								<span class="font-mono font-semibold ml-2">{maxFiles}</span>
							</div>
							<div class="text-xs">
								<span class="text-muted-foreground">Max Size:</span>
								<span class="font-mono font-semibold ml-2">{maxSize} MB</span>
							</div>
							<div class="text-xs">
								<span class="text-muted-foreground">Types:</span>
								<span class="font-mono font-semibold ml-2">{acceptedTypes.join(", ")}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Quick Start</h2>
			</div>
			<div class={`${card} p-8 shadow-lg`}>
				<FileUploader onFilesChange={(newFiles) => console.log(newFiles)} maxFilesToUpload={1} />
			</div>
			<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-semibold">Code</span>
					<button
						onclick={() => copyCode(basicCode)}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode === basicCode ? "✓ Copied" : "Copy"}
					</button>
				</div>
				<pre class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{basicCode}</code></pre>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Examples</h2>
			</div>
			<p class="text-muted-foreground">
				Different file uploader configurations for various use cases.
			</p>

			<div class="grid gap-6">
				<div class="space-y-3 group">
					<div>
						<h3 class="text-lg font-semibold">Single PDF Upload</h3>
						<p class="text-sm text-muted-foreground">Restrict to PDF files only, 5 MB max</p>
					</div>
					<div class={`${card} p-6 transition-all group-hover:shadow-md`}>
						<FileUploader
							onFilesChange={(newFiles) => console.log(newFiles)}
							maxFilesToUpload={1}
							acceptedFileTypes={[".pdf"]}
							maxFileSize={5 * 1024 * 1024}
						/>
					</div>
				</div>

				<div class="space-y-3 group">
					<div>
						<h3 class="text-lg font-semibold">Multiple Image Upload</h3>
						<p class="text-sm text-muted-foreground">Upload up to 5 images (JPG, PNG), 2 MB each</p>
					</div>
					<div class={`${card} p-6 transition-all group-hover:shadow-md`}>
						<FileUploader
							onFilesChange={(newFiles) => console.log(newFiles)}
							maxFilesToUpload={5}
							acceptedFileTypes={[".jpg", ".jpeg", ".png"]}
							maxFileSize={2 * 1024 * 1024}
						/>
					</div>
				</div>

				<div class="space-y-3 group">
					<div>
						<h3 class="text-lg font-semibold">Document Upload</h3>
						<p class="text-sm text-muted-foreground">Accept various document formats, 20 MB max</p>
					</div>
					<div class={`${card} p-6 transition-all group-hover:shadow-md`}>
						<FileUploader
							onFilesChange={(newFiles) => console.log(newFiles)}
							maxFilesToUpload={3}
							acceptedFileTypes={[".pdf", ".doc", ".docx", ".txt"]}
							maxFileSize={20 * 1024 * 1024}
						/>
					</div>
				</div>

				<div class="space-y-3 group">
					<div>
						<h3 class="text-lg font-semibold">Spreadsheet Upload</h3>
						<p class="text-sm text-muted-foreground">CSV and Excel files only</p>
					</div>
					<div class={`${card} p-6 transition-all group-hover:shadow-md`}>
						<FileUploader
							onFilesChange={(newFiles) => console.log(newFiles)}
							maxFilesToUpload={2}
							acceptedFileTypes={[".csv", ".xlsx", ".xls"]}
							maxFileSize={10 * 1024 * 1024}
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-6">
			<div class="flex items-center gap-3 mb-2">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">With File Preview</h2>
			</div>
			<p class="text-muted-foreground">
				Display uploaded files with preview cards and remove actions.
			</p>

			<div class={`${card} p-6`}>
				<div class="space-y-4">
					<h3 class="text-base font-semibold">Upload Documents</h3>
					<div class="grid md:grid-cols-2 gap-4">
						<Item.Root variant="outline">
							<Item.Media variant="icon">
								<IconPdf  />
							</Item.Media>
							<Item.Content>
								<Item.Header>
									<Item.Title>annual-report-2024.pdf</Item.Title>
									<Badge variant="success" size="sm">Uploaded</Badge>
								</Item.Header>
								<Item.Description>2.45 MB</Item.Description>
							</Item.Content>
							<Item.Actions>
								<Button variant="ghost" size="sm" class="size-8 p-0">
									<IconCross  />
								</Button>
							</Item.Actions>
						</Item.Root>

						<Item.Root variant="outline">
							<Item.Media variant="icon">
								<IconPdf />
							</Item.Media>
							<Item.Content>
								<Item.Header>
									<Item.Title>sales-data-q4.xlsx</Item.Title>
									<Badge variant="success" size="sm">Uploaded</Badge>
								</Item.Header>
								<Item.Description>1.28 MB</Item.Description>
							</Item.Content>
							<Item.Actions>
								<Button variant="ghost" size="sm" class="size-8 p-0">
									<IconCross  />
								</Button>
							</Item.Actions>
						</Item.Root>

						<Item.Root variant="outline">
							<Item.Media variant="icon">
								<IconPhoto  />
							</Item.Media>
							<Item.Content>
								<Item.Header>
									<Item.Title>product-photo.jpg</Item.Title>
									<Badge variant="warning" size="sm">Uploading</Badge>
								</Item.Header>
								<Item.Description>856 KB</Item.Description>
								<Progress value={65} max={100} class="mt-2" />
							</Item.Content>
							<Item.Actions>
								<Button variant="ghost" size="sm" class="size-8 p-0">
									<IconCross />
								</Button>
							</Item.Actions>
						</Item.Root>

						<Item.Root variant="outline">
							<Item.Media variant="icon">
								<IconVideo />
							</Item.Media>
							<Item.Content>
								<Item.Header>
									<Item.Title>demo-video.mp4</Item.Title>
									<Badge variant="neutral" size="sm">Queued</Badge>
								</Item.Header>
								<Item.Description>15.7 MB</Item.Description>
							</Item.Content>
							<Item.Actions>
								<Button variant="ghost" size="sm" class="size-8 p-0">
									<IconCross />
								</Button>
							</Item.Actions>
						</Item.Root>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-semibold">Code</span>
					<button
						onclick={() => copyCode(withPreviewCode)}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode === withPreviewCode ? "✓ Copied" : "Copy"}
					</button>
				</div>
				<pre
					class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>{withPreviewCode}</code></pre>
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Installation</h2>
			</div>
			<div class="rounded-lg border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-semibold">Import</span>
					<button
						onclick={() =>
							copyCode(
								'import FileUploader from "$lib/components/shared/file-uploader/file-uploader.svelte";',
							)}
						class="text-xs px-3 py-1.5 rounded-md border hover:bg-accent transition-all hover:scale-105 font-medium"
					>
						{copiedCode ===
						'import FileUploader from "$lib/components/shared/file-uploader/file-uploader.svelte";'
							? "✓ Copied"
							: "Copy"}
					</button>
				</div>
				<pre
					class="text-sm overflow-x-auto bg-muted/50 p-3 rounded"><code>import FileUploader from "$lib/components/shared/file-uploader/file-uploader.svelte";</code></pre>
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">Props</h2>
			</div>
			<div class="rounded-xl border overflow-hidden shadow-lg bg-card">
				<table class="w-full text-sm">
					<thead class="bg-gradient-to-r from-muted to-muted/50">
						<tr>
							<th class="text-left p-4 font-semibold">Prop</th>
							<th class="text-left p-4 font-semibold">Type</th>
							<th class="text-left p-4 font-semibold">Default</th>
							<th class="text-left p-4 font-semibold">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">onFilesChange</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">(files: File[]) => void</td>
							<td class="p-4 font-mono text-xs"></td>
							<td class="p-4 text-muted-foreground">Callback when files are selected</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">maxFilesToUpload</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">number</td>
							<td class="p-4 font-mono text-xs">1</td>
							<td class="p-4 text-muted-foreground">Maximum number of files allowed</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">maxFileSize</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">number</td>
							<td class="p-4 font-mono text-xs">10485760</td>
							<td class="p-4 text-muted-foreground">Max file size in bytes (default 10 MB)</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">acceptedFileTypes</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">string[]</td>
							<td class="p-4 font-mono text-xs">[".csv", ".pdf", ".xlsx"]</td>
							<td class="p-4 text-muted-foreground">Accepted file extensions</td>
						</tr>
						<tr class="hover:bg-muted/20 transition-colors">
							<td class="p-4 font-mono text-xs font-semibold">disable</td>
							<td class="p-4 font-mono text-xs text-muted-foreground">boolean</td>
							<td class="p-4 font-mono text-xs">false</td>
							<td class="p-4 text-muted-foreground">Disable the uploader</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section class="space-y-4">
			<div class="flex items-center gap-3">
				<div class="w-1 h-8 bg-gradient-to-b from-primary to-primary/60 rounded-full"></div>
				<h2 class="text-3xl font-bold">File Type Icons</h2>
			</div>
			<p class="text-muted-foreground">Recommended icons for different file types.</p>
			<div class="grid md:grid-cols-3 gap-4">
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconPdf  />
						</div>
						<div>
							<div class="text-sm font-semibold">Documents</div>
							<div class="text-xs text-muted-foreground">.pdf, .doc, .txt</div>
						</div>
					</div>
				</div>
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconPdf />
						</div>
						<div>
							<div class="text-sm font-semibold">Spreadsheets</div>
							<div class="text-xs text-muted-foreground">.xlsx, .csv, .xls</div>
						</div>
					</div>
				</div>
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconPhoto />
						</div>
						<div>
							<div class="text-sm font-semibold">Images</div>
							<div class="text-xs text-muted-foreground">.jpg, .png, .gif</div>
						</div>
					</div>
				</div>
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconVideo />
						</div>
						<div>
							<div class="text-sm font-semibold">Videos</div>
							<div class="text-xs text-muted-foreground">.mp4, .mov, .avi</div>
						</div>
					</div>
				</div>
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconPdf />
						</div>
						<div>
							<div class="text-sm font-semibold">Audio</div>
							<div class="text-xs text-muted-foreground">.mp3, .wav, .ogg</div>
						</div>
					</div>
				</div>
				<div class={`${card} p-4 space-y-2`}>
					<div class="flex items-center gap-3">
						<div class="size-10 rounded-md bg-muted flex items-center justify-center">
							<IconPdf  />
						</div>
						<div>
							<div class="text-sm font-semibold">Other Files</div>
							<div class="text-xs text-muted-foreground">Default fallback</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
