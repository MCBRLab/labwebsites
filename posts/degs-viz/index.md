# 差异表达分析结果可视化



# 一.目的：

> 使用Volcano_gene_annotation.R对基因表达量进行火山图绘制以及基因标注

# 二.使用示例：

### 脚本路径:

```bash
/mnt/ilustre/users/jiawen.ma/script/R_script/Volcano_gene_annotation
```

### 程序执行：

```bash
Rscript Volcano_gene_annotation.R -g FI_vs_FOI.deseq2.annot.xls -s gene_anno_need.list -f 1 -n FI_vs_FOI.deseq2 -o ./ 
```

参数说明：
-g：云平台下载的差异基因表达量
-s：需要标记的基因list
-f：需要设定的log2fc的值（如：1；1.2；2）
-n：输出的文件名
-o：输出路径


![54EA6B6A-80A9-4108-A75E-E2C6F4CD0564](54EA6B6A-80A9-4108-A75E-E2C6F4CD0564.png)

> **补充信息：**



> -s：将需要标记的基因做成一列的list文件（如下图所示）
>
> **注意事项：**如果不需要对基因基因标记，输入的list为空文件即可。
>
> ![3C73D3C3-F4DA-4e22-B538-BED75D6E0024](3C73D3C3-F4DA-4e22-B538-BED75D6E0024.png)
>
> 




# 三.结果展示：

> ![7AA36E5C-72FF-4375-A79F-F96F1ADA601B](7AA36E5C-72FF-4375-A79F-F96F1ADA601B.png)


# 一.目的：

> 使用scatter_gene_annotation.R对基因表达量进行散点图绘制以及基因标注

# 二.使用示例：

### 脚本路径:

```bash
/mnt/ilustre/users/jiawen.ma/script/R_script/scatter_gene_annotation
```

### 程序执行：

```bash
Rscript scatter_gene_annotation.R -g FI_vs_FOI.deseq2.annot.xls -s gene_anno_need.list -f 1 -n FI_vs_FOI.deseq2 -o ./ 
```

参数说明：
-g：云平台下载的差异基因表达量
-s：需要标记的基因list
-f：需要设定的fc的值（如：1；1.2；2）
-n：输出的文件名
-o：输出路径

![ADB95094-AD25-4a25-8211-DCD611A2BC2E](ADB95094-AD25-4a25-8211-DCD611A2BC2E.png)

> **补充信息：**



> -s：将需要标记的基因做成一列的list文件（如下图所示）
>
> **注意事项：**如果不需要对基因基因标记，输入的list为空文件即可。
>
> ![3C73D3C3-F4DA-4e22-B538-BED75D6E0024](3C73D3C3-F4DA-4e22-B538-BED75D6E0024.png)
>
> 




# 三.结果展示：

> ![75EE257F-71F9-4942-8269-27E95C1547EB](75EE257F-71F9-4942-8269-27E95C1547EB.png)




# 一.目的：

> 使用 cor_plot.R 绘制差异表达基因的FoldChange的相关性图

# 二.使用示例：

### 脚本路径:

```bash
/mnt/ilustre/users/jiawen.ma/workspace/plot_data/cor_210707
```

### 程序执行：

```bash
Rscript cor_plot.R -c DPI05uM_vs_DPI1uM.deseq2.annot.xls -s TGFb2ng_vs_DPI05uM.deseq2.annot.xls -f 1 -o ./
```

参数说明：
-c：对照组文件
-s：处理组文件
-f：设定一个fc的值
-o：输出结果路径
-h：脚本使用的帮助信息

![B50C0F89-5C10-425e-8D0D-920B56E426F5](B50C0F89-5C10-425e-8D0D-920B56E426F5.png)

> **注意事项：**
>
> 如果 -c 与 -s 输入的文件中log2fc为其他大小写（如：Log2FC、log2FC等）需要将列名改为log2fc。




# 三.结果展示：

> 输出文件为file1_name_VS_file2_name.pdf

![DF18B657-F07E-4125-B138-67294776F9F7](DF18B657-F07E-4125-B138-67294776F9F7.png)

