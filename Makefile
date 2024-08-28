.PHONY: release

release:
	bun build --compile --minify --sourcemap ./index.ts --outfile vu 
	mv vu ~/.local/bin