# Introduction

An issue repro of metro `config.resolver.unstable_enablePackageExports` by default from 0.82.x.

## Repro steps

```
$ npx expo start -w
```

To workaround the issue, you can re-apply [df0556e2e5e80f93472d041c2404d6ec358a0ec2](https://github.com/Kudo/repro-sdk53-antd/commit/df0556e2e5e80f93472d041c2404d6ec358a0ec2) to disable `unstable_enablePackageExports`.
