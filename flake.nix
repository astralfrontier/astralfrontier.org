{
  description = "The astralfrontier.org website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        builddeps = with pkgs; [
          nodejs_22
          zola
        ];
      in
      {
        packages.default = pkgs.buildNpmPackage {
          name = "astralfrontier.org";
          nativeBuildInputs = builddeps;
          src = self;
          npmDepsHash = "sha256-4rRqGHARQaa2bfxv4JzHObZTu4g3BVr2H5GWfevcIx4=";
          npmBuildScript = "gulp";
          installPhase = ''
            mkdir $out
            cp -r public/. $out/
          '';
        };
        devShell = pkgs.mkShell {
          name = "astralfrontier.org";
          packages = builddeps;
        };
      }
    );
}
