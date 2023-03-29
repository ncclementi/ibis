window.BENCHMARK_DATA = {
  "lastUpdate": 1680102796561,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "4a58fb6200b9311485e889cb8e19c1ba7bb97d57",
          "message": "build: format javascript with prettier",
          "timestamp": "2023-03-29T11:08:05-04:00",
          "tree_id": "e5c6bcf522084dfbae949798f35e92bfae7e7c16",
          "url": "https://github.com/ibis-project/ibis/commit/4a58fb6200b9311485e889cb8e19c1ba7bb97d57"
        },
        "date": 1680102710405,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.82458793908661,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260394163060721",
            "extra": "mean: 13.364590805552881 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.32153212823663,
            "unit": "iter/sec",
            "range": "stddev: 0.00011403992078117735",
            "extra": "mean: 10.275218424246967 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69241.39636312645,
            "unit": "iter/sec",
            "range": "stddev: 5.935807926435365e-7",
            "extra": "mean: 14.442227518862348 usec\nrounds: 12377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.67753958894792,
            "unit": "iter/sec",
            "range": "stddev: 0.00005817317652989138",
            "extra": "mean: 6.223645212381533 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5090.332782500259,
            "unit": "iter/sec",
            "range": "stddev: 0.0001008946572183777",
            "extra": "mean: 196.4508103355911 usec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.6783430166752,
            "unit": "iter/sec",
            "range": "stddev: 0.000040009213733129674",
            "extra": "mean: 1.8529555853774582 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 299.4939769998616,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838398892167483",
            "extra": "mean: 3.3389653108131183 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.70144722845419,
            "unit": "iter/sec",
            "range": "stddev: 0.0005365000654730677",
            "extra": "mean: 9.371944111113509 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6687637542902549,
            "unit": "iter/sec",
            "range": "stddev: 0.03877625508746778",
            "extra": "mean: 1.4952963488000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5580.088032598416,
            "unit": "iter/sec",
            "range": "stddev: 0.00005017568655167604",
            "extra": "mean: 179.20864225762787 usec\nrounds: 355"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5823.914685730788,
            "unit": "iter/sec",
            "range": "stddev: 0.00004447079167515566",
            "extra": "mean: 171.70581197731255 usec\nrounds: 2872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2581008.4106069705,
            "unit": "iter/sec",
            "range": "stddev: 1.89144942654442e-8",
            "extra": "mean: 387.4454635217147 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5335.241972379505,
            "unit": "iter/sec",
            "range": "stddev: 0.00004461758600583221",
            "extra": "mean: 187.43292341321916 usec\nrounds: 2520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.4487536392102,
            "unit": "iter/sec",
            "range": "stddev: 0.000028131641016035498",
            "extra": "mean: 3.063267936704074 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6056440220427715,
            "unit": "iter/sec",
            "range": "stddev: 0.0008424246167382136",
            "extra": "mean: 383.78227859998333 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5603.0417987552555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000287339813373817",
            "extra": "mean: 178.47448509524867 usec\nrounds: 1476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.0733892928928,
            "unit": "iter/sec",
            "range": "stddev: 0.000601598160635825",
            "extra": "mean: 8.259453260871929 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 280.57442098913157,
            "unit": "iter/sec",
            "range": "stddev: 0.00027707284581766174",
            "extra": "mean: 3.5641167732775485 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8129.752639191162,
            "unit": "iter/sec",
            "range": "stddev: 0.000011581040692996395",
            "extra": "mean: 123.00497252269304 usec\nrounds: 3603"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.8083524752265,
            "unit": "iter/sec",
            "range": "stddev: 0.00019971473138852302",
            "extra": "mean: 3.2070981808591896 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 105.94543285198426,
            "unit": "iter/sec",
            "range": "stddev: 0.011274936015288105",
            "extra": "mean: 9.4388212222144 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1896270.9645208204,
            "unit": "iter/sec",
            "range": "stddev: 9.416503732763299e-8",
            "extra": "mean: 527.3507946437895 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12375901.779948853,
            "unit": "iter/sec",
            "range": "stddev: 4.107485443966553e-9",
            "extra": "mean: 80.80219266285853 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.146903758679414,
            "unit": "iter/sec",
            "range": "stddev: 0.0003073239199502738",
            "extra": "mean: 17.197820268301612 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.242467145352,
            "unit": "iter/sec",
            "range": "stddev: 0.0007189020839065938",
            "extra": "mean: 8.830609445451707 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486426.5436119081,
            "unit": "iter/sec",
            "range": "stddev: 1.651777839060929e-7",
            "extra": "mean: 2.055808863913156 usec\nrounds: 2098"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.79889752819206,
            "unit": "iter/sec",
            "range": "stddev: 0.0005879132803264332",
            "extra": "mean: 8.210254939036176 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.78249391639369,
            "unit": "iter/sec",
            "range": "stddev: 0.0006013370823985855",
            "extra": "mean: 9.364830913042347 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.40637396411094,
            "unit": "iter/sec",
            "range": "stddev: 0.0005972329158146181",
            "extra": "mean: 8.66503266371561 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.63010547202023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000499511124884919",
            "extra": "mean: 7.213440374982838 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.5503400433925,
            "unit": "iter/sec",
            "range": "stddev: 0.00000864132095740373",
            "extra": "mean: 567.0379672719719 usec\nrounds: 1375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17787048530400618,
            "unit": "iter/sec",
            "range": "stddev: 0.07666893293698834",
            "extra": "mean: 5.622068204800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.57411880580624,
            "unit": "iter/sec",
            "range": "stddev: 0.000594111751981779",
            "extra": "mean: 9.562595519996648 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.49997805451645,
            "unit": "iter/sec",
            "range": "stddev: 0.00022187764835206875",
            "extra": "mean: 9.569380000044703 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.44327006644722,
            "unit": "iter/sec",
            "range": "stddev: 0.0001189443074624893",
            "extra": "mean: 95.75544763635496 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.62075124620148,
            "unit": "iter/sec",
            "range": "stddev: 0.004217242228128669",
            "extra": "mean: 6.07456831796638 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.80068833595504,
            "unit": "iter/sec",
            "range": "stddev: 0.00008638932021132867",
            "extra": "mean: 6.067935820519429 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 104.33687706577952,
            "unit": "iter/sec",
            "range": "stddev: 0.01383741182199089",
            "extra": "mean: 9.584339000002336 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.45468164835885,
            "unit": "iter/sec",
            "range": "stddev: 0.0006929103430399787",
            "extra": "mean: 37.80049267998038 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.8855319296701,
            "unit": "iter/sec",
            "range": "stddev: 0.000672306717131008",
            "extra": "mean: 8.341290094843488 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 294.09481968390133,
            "unit": "iter/sec",
            "range": "stddev: 0.000270662408173249",
            "extra": "mean: 3.4002639049365744 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1176.8677714263258,
            "unit": "iter/sec",
            "range": "stddev: 0.000014674302524698947",
            "extra": "mean: 849.7131319927576 usec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5756.080805777353,
            "unit": "iter/sec",
            "range": "stddev: 0.00005091696539826206",
            "extra": "mean: 173.72931926117235 usec\nrounds: 2653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 304.3235161617303,
            "unit": "iter/sec",
            "range": "stddev: 0.00020203578772028056",
            "extra": "mean: 3.2859767546473733 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.0391754753887,
            "unit": "iter/sec",
            "range": "stddev: 0.000025725768405288717",
            "extra": "mean: 5.262072925219076 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.94128504746068,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140001254781871",
            "extra": "mean: 8.478795186923652 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.52220510805175,
            "unit": "iter/sec",
            "range": "stddev: 0.0006450806243141619",
            "extra": "mean: 8.29722621738849 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13313.899039200489,
            "unit": "iter/sec",
            "range": "stddev: 0.000002090280688027281",
            "extra": "mean: 75.10947747580718 usec\nrounds: 6859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.37871644722298,
            "unit": "iter/sec",
            "range": "stddev: 0.00005734314522656853",
            "extra": "mean: 6.519809417912922 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5612.845392682261,
            "unit": "iter/sec",
            "range": "stddev: 0.000056566824061317184",
            "extra": "mean: 178.16275525845563 usec\nrounds: 2709"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.069183840331,
            "unit": "iter/sec",
            "range": "stddev: 0.00002960807675597454",
            "extra": "mean: 1.4618404448305198 msec\nrounds: 580"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.91182365256054,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053148082632024",
            "extra": "mean: 9.812404136827306 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5472.885975842398,
            "unit": "iter/sec",
            "range": "stddev: 0.000046776134084448935",
            "extra": "mean: 182.71895384154752 usec\nrounds: 2903"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.38506492740385,
            "unit": "iter/sec",
            "range": "stddev: 0.0001974580356395382",
            "extra": "mean: 3.221804503492752 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6389132.652105092,
            "unit": "iter/sec",
            "range": "stddev: 9.692686649964873e-9",
            "extra": "mean: 156.515767389881 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1892988.5868260104,
            "unit": "iter/sec",
            "range": "stddev: 9.184122460444169e-8",
            "extra": "mean: 528.2652029491146 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.919858707553706,
            "unit": "iter/sec",
            "range": "stddev: 0.005136116302075207",
            "extra": "mean: 1.087123480800028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.76531260020668,
            "unit": "iter/sec",
            "range": "stddev: 0.02152715731053405",
            "extra": "mean: 25.796257863651753 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.5308632895128,
            "unit": "iter/sec",
            "range": "stddev: 0.0002110100246677146",
            "extra": "mean: 3.169262079704888 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.766368108722967,
            "unit": "iter/sec",
            "range": "stddev: 0.0014065783131666353",
            "extra": "mean: 566.1334095999791 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139929.88369979797,
            "unit": "iter/sec",
            "range": "stddev: 3.409482130403108e-7",
            "extra": "mean: 7.146436297663011 usec\nrounds: 43860"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9158493153729605,
            "unit": "iter/sec",
            "range": "stddev: 0.0023184430438146237",
            "extra": "mean: 1.0918826745999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.20442117158174,
            "unit": "iter/sec",
            "range": "stddev: 0.00020104250387936758",
            "extra": "mean: 13.849567433324713 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.10897245432771,
            "unit": "iter/sec",
            "range": "stddev: 0.000594045089377207",
            "extra": "mean: 9.336286000002563 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5830417.923408249,
            "unit": "iter/sec",
            "range": "stddev: 1.9645461250702178e-8",
            "extra": "mean: 171.51429162307102 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11519.482802778426,
            "unit": "iter/sec",
            "range": "stddev: 0.00004929017626985358",
            "extra": "mean: 86.80945291734855 usec\nrounds: 4354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.498944296564076,
            "unit": "iter/sec",
            "range": "stddev: 0.024601099103929942",
            "extra": "mean: 26.667417410244994 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.789137291477566,
            "unit": "iter/sec",
            "range": "stddev: 0.00015372101402338307",
            "extra": "mean: 20.496365697670964 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.1884127882741,
            "unit": "iter/sec",
            "range": "stddev: 0.004002611465149671",
            "extra": "mean: 4.27006608949557 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11833.74288463944,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017316841667693723",
            "extra": "mean: 84.5041175685869 usec\nrounds: 5163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1677960.9128886405,
            "unit": "iter/sec",
            "range": "stddev: 9.768979270523612e-8",
            "extra": "mean: 595.9614388624117 nsec\nrounds: 129871"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8491466734021608,
            "unit": "iter/sec",
            "range": "stddev: 0.001986301451482605",
            "extra": "mean: 1.177652849999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.705982592333276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003397685104194657",
            "extra": "mean: 63.67000562499925 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.9504768209212,
            "unit": "iter/sec",
            "range": "stddev: 0.000010433665817940936",
            "extra": "mean: 1.3298748133358156 msec\nrounds: 600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 296.0194809666162,
            "unit": "iter/sec",
            "range": "stddev: 0.00003730901365098985",
            "extra": "mean: 3.3781560481581137 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.12378790125103,
            "unit": "iter/sec",
            "range": "stddev: 0.00006855444157604355",
            "extra": "mean: 8.918714027755767 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 741102.3214559051,
            "unit": "iter/sec",
            "range": "stddev: 1.4044909349707338e-7",
            "extra": "mean: 1.349341340660608 usec\nrounds: 22728"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.294403575646285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005971560815705283",
            "extra": "mean: 22.5762154871821 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.70485222047786,
            "unit": "iter/sec",
            "range": "stddev: 0.0006789421660684005",
            "extra": "mean: 9.832372577782028 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.54433092924731,
            "unit": "iter/sec",
            "range": "stddev: 0.00021352547206845055",
            "extra": "mean: 180.36441416669882 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.56491520026718,
            "unit": "iter/sec",
            "range": "stddev: 0.00005752787461342188",
            "extra": "mean: 10.574746436162135 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5818.017575348161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000441198035143286",
            "extra": "mean: 171.87985203708465 usec\nrounds: 2798"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.33886952295725,
            "unit": "iter/sec",
            "range": "stddev: 0.000662537585648941",
            "extra": "mean: 9.867881936194882 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.81080469254393,
            "unit": "iter/sec",
            "range": "stddev: 0.020619044203715194",
            "extra": "mean: 13.019001740741698 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 306.19007266367294,
            "unit": "iter/sec",
            "range": "stddev: 0.0002107311444311705",
            "extra": "mean: 3.265945206193624 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.89781033152201,
            "unit": "iter/sec",
            "range": "stddev: 0.00049342325972635",
            "extra": "mean: 14.728015456129421 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 351.1676972724272,
            "unit": "iter/sec",
            "range": "stddev: 0.00014404895720363743",
            "extra": "mean: 2.8476423309067207 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7116101.530164985,
            "unit": "iter/sec",
            "range": "stddev: 1.2538232683127745e-8",
            "extra": "mean: 140.5263817220454 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}