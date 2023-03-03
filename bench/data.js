window.BENCHMARK_DATA = {
  "lastUpdate": 1677878346919,
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
          "id": "4a69de448d2ce5d89134c6bdf51b59fb5adca74f",
          "message": "ci: add coverage to doctests",
          "timestamp": "2023-03-03T16:12:24-05:00",
          "tree_id": "1043faec0e9a89c5fb644141c461d59c08d194cc",
          "url": "https://github.com/ibis-project/ibis/commit/4a69de448d2ce5d89134c6bdf51b59fb5adca74f"
        },
        "date": 1677878270187,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721968.6569208198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018989463629706447",
            "extra": "mean: 1.3851016805424459 usec\nrounds: 9579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5623340.820682738,
            "unit": "iter/sec",
            "range": "stddev: 1.1350168610701083e-8",
            "extra": "mean: 177.83023150986185 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 132.02936016105662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558731739617691",
            "extra": "mean: 7.574072909087384 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8860295405080536,
            "unit": "iter/sec",
            "range": "stddev: 0.007218070651602774",
            "extra": "mean: 1.1286305414000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5060.919480957627,
            "unit": "iter/sec",
            "range": "stddev: 0.00007876501505670395",
            "extra": "mean: 197.5925528478829 usec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.845447225298244,
            "unit": "iter/sec",
            "range": "stddev: 0.000257368475846836",
            "extra": "mean: 20.47273710869159 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2010357.554365415,
            "unit": "iter/sec",
            "range": "stddev: 1.3425042517659317e-7",
            "extra": "mean: 497.4239521862855 nsec\nrounds: 131562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4694.251457375249,
            "unit": "iter/sec",
            "range": "stddev: 0.000202815531751031",
            "extra": "mean: 213.0265089291023 usec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7010673.619906132,
            "unit": "iter/sec",
            "range": "stddev: 4.473752948403977e-9",
            "extra": "mean: 142.63964552002787 nsec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 116.19318065932198,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593756664848964",
            "extra": "mean: 8.60635705405119 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 302.46912941208666,
            "unit": "iter/sec",
            "range": "stddev: 0.00024276946638397288",
            "extra": "mean: 3.3061225188293215 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5608.045774137581,
            "unit": "iter/sec",
            "range": "stddev: 0.00005251698738754657",
            "extra": "mean: 178.31523498108078 usec\nrounds: 3379"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.59587136029384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008172228580016681",
            "extra": "mean: 10.246335076084401 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10736685.364612246,
            "unit": "iter/sec",
            "range": "stddev: 3.92454718879205e-9",
            "extra": "mean: 93.13861457619932 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.97860118942447,
            "unit": "iter/sec",
            "range": "stddev: 0.0009695434384844935",
            "extra": "mean: 10.418989103898154 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.57560987089691,
            "unit": "iter/sec",
            "range": "stddev: 0.00010260106869782463",
            "extra": "mean: 64.20294346666348 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.64495686980464,
            "unit": "iter/sec",
            "range": "stddev: 0.00026753440599853903",
            "extra": "mean: 13.578662307697169 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.0157500469906,
            "unit": "iter/sec",
            "range": "stddev: 0.000013801050839290938",
            "extra": "mean: 2.9672203743017014 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1900922.8281529946,
            "unit": "iter/sec",
            "range": "stddev: 1.1057775825654866e-7",
            "extra": "mean: 526.0602825058586 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1846356.5355629283,
            "unit": "iter/sec",
            "range": "stddev: 1.205929091499825e-7",
            "extra": "mean: 541.607203559476 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 276.34941027232435,
            "unit": "iter/sec",
            "range": "stddev: 0.00039251853958236226",
            "extra": "mean: 3.6186073240198526 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.55021432380252,
            "unit": "iter/sec",
            "range": "stddev: 0.011622432124558366",
            "extra": "mean: 8.295298400000862 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 296.66000788916716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002982514007838797",
            "extra": "mean: 3.370862176925453 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16585222591508977,
            "unit": "iter/sec",
            "range": "stddev: 0.07002307737494115",
            "extra": "mean: 6.029463846400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 185.61918790612995,
            "unit": "iter/sec",
            "range": "stddev: 0.004221679498988978",
            "extra": "mean: 5.387374070970039 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 291.7313402365153,
            "unit": "iter/sec",
            "range": "stddev: 0.00024414311384805923",
            "extra": "mean: 3.4278113526961835 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.04734133455648,
            "unit": "iter/sec",
            "range": "stddev: 0.00014754232044282637",
            "extra": "mean: 6.327218107916085 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 138.13708628282353,
            "unit": "iter/sec",
            "range": "stddev: 0.0007376754057678746",
            "extra": "mean: 7.239185557690046 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12736.291756838134,
            "unit": "iter/sec",
            "range": "stddev: 0.00000183543566821234",
            "extra": "mean: 78.51578929660577 usec\nrounds: 5064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1773.9089237997262,
            "unit": "iter/sec",
            "range": "stddev: 0.000009035588114491301",
            "extra": "mean: 563.7267993770461 usec\nrounds: 1281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 146057.5141361434,
            "unit": "iter/sec",
            "range": "stddev: 3.1513130646757777e-7",
            "extra": "mean: 6.84661796357754 usec\nrounds: 32154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 262.44657836003535,
            "unit": "iter/sec",
            "range": "stddev: 0.00009026678975046439",
            "extra": "mean: 3.8102992473697164 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1157.28629723258,
            "unit": "iter/sec",
            "range": "stddev: 0.000014028403326384689",
            "extra": "mean: 864.0904177223053 usec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 100.5507738165602,
            "unit": "iter/sec",
            "range": "stddev: 0.000846982824002006",
            "extra": "mean: 9.945224308510545 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.641001417369967,
            "unit": "iter/sec",
            "range": "stddev: 0.0005438391126407274",
            "extra": "mean: 93.97611754544434 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5591.753382969268,
            "unit": "iter/sec",
            "range": "stddev: 0.000052330830734868755",
            "extra": "mean: 178.83478249339237 usec\nrounds: 2262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.59629823898877,
            "unit": "iter/sec",
            "range": "stddev: 0.00020458916453858006",
            "extra": "mean: 178.6895475000089 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.27157355072762,
            "unit": "iter/sec",
            "range": "stddev: 0.0003201462058615607",
            "extra": "mean: 5.255645818966192 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13851.330920087245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017374244190901025",
            "extra": "mean: 72.19522844189628 usec\nrounds: 5949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 680.8143246286437,
            "unit": "iter/sec",
            "range": "stddev: 0.000026677214942849037",
            "extra": "mean: 1.4688292590574663 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 305.6331097579504,
            "unit": "iter/sec",
            "range": "stddev: 0.00024309569068383608",
            "extra": "mean: 3.2718968203149235 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.24247639000123,
            "unit": "iter/sec",
            "range": "stddev: 0.004252973393156378",
            "extra": "mean: 7.3941266582274165 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.3225406003037,
            "unit": "iter/sec",
            "range": "stddev: 0.00005929502464667246",
            "extra": "mean: 5.146083397792079 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8451076611687536,
            "unit": "iter/sec",
            "range": "stddev: 0.006702224483162938",
            "extra": "mean: 1.1832811911999896 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12064.455885652185,
            "unit": "iter/sec",
            "range": "stddev: 0.000013983414190202862",
            "extra": "mean: 82.88811443119148 usec\nrounds: 4116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.723402918078467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005613603479493286",
            "extra": "mean: 32.548477870970906 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.812863968338657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006201987808556678",
            "extra": "mean: 48.0472078000048 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6005393.16823448,
            "unit": "iter/sec",
            "range": "stddev: 1.340282368263255e-8",
            "extra": "mean: 166.51699097561817 nsec\nrounds: 35715"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4962.727802401124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004703632658921597",
            "extra": "mean: 201.50208510653525 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4786839439496586,
            "unit": "iter/sec",
            "range": "stddev: 0.0028061328697863174",
            "extra": "mean: 403.43989900001134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7513555924870758,
            "unit": "iter/sec",
            "range": "stddev: 0.00170345089437075",
            "extra": "mean: 570.9862715999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8679003517683682,
            "unit": "iter/sec",
            "range": "stddev: 0.029023785437089996",
            "extra": "mean: 1.1522060084000145 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 300.53580322912467,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769514373244841",
            "extra": "mean: 3.3273905779459256 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.50326310603225,
            "unit": "iter/sec",
            "range": "stddev: 0.00019707036764411793",
            "extra": "mean: 13.604838176469096 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.71921888196634,
            "unit": "iter/sec",
            "range": "stddev: 0.0008156848123183291",
            "extra": "mean: 10.233401488891205 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.349243848190895,
            "unit": "iter/sec",
            "range": "stddev: 0.03231831829587382",
            "extra": "mean: 30.912623636361264 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.86001045960429,
            "unit": "iter/sec",
            "range": "stddev: 0.0009561570797301185",
            "extra": "mean: 27.88621607142261 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1966579.041649423,
            "unit": "iter/sec",
            "range": "stddev: 1.3417043332349784e-7",
            "extra": "mean: 508.49723241292804 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 536.2277108780871,
            "unit": "iter/sec",
            "range": "stddev: 0.000040634522899064954",
            "extra": "mean: 1.8648793781329829 msec\nrounds: 439"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.53719775573856,
            "unit": "iter/sec",
            "range": "stddev: 0.0008142253881372321",
            "extra": "mean: 9.946567263885383 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 285.6137182050725,
            "unit": "iter/sec",
            "range": "stddev: 0.00023601889718312402",
            "extra": "mean: 3.5012323857707477 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.11035624108598,
            "unit": "iter/sec",
            "range": "stddev: 0.00019361316236106267",
            "extra": "mean: 7.346979521740036 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.3053644873146,
            "unit": "iter/sec",
            "range": "stddev: 0.00007463854260598944",
            "extra": "mean: 7.44571896898766 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.73220783760664,
            "unit": "iter/sec",
            "range": "stddev: 0.0009316705187512671",
            "extra": "mean: 11.529742236844168 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.0823070738597,
            "unit": "iter/sec",
            "range": "stddev: 0.000018057378572517742",
            "extra": "mean: 1.3603918777214177 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 127.07998954111487,
            "unit": "iter/sec",
            "range": "stddev: 0.000766057557450145",
            "extra": "mean: 7.869059508196329 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72411.43639736265,
            "unit": "iter/sec",
            "range": "stddev: 0.000024553077445753434",
            "extra": "mean: 13.80997325494874 usec\nrounds: 12675"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 134.1997380253191,
            "unit": "iter/sec",
            "range": "stddev: 0.0008490014094785916",
            "extra": "mean: 7.451579375000961 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 133.87132054446343,
            "unit": "iter/sec",
            "range": "stddev: 0.0009270867927535083",
            "extra": "mean: 7.469859832060628 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5104.862558348136,
            "unit": "iter/sec",
            "range": "stddev: 0.000052563968209205076",
            "extra": "mean: 195.8916598772419 usec\nrounds: 2111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 136.0626518621978,
            "unit": "iter/sec",
            "range": "stddev: 0.000833300629944789",
            "extra": "mean: 7.349555416667792 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 284.60690426785135,
            "unit": "iter/sec",
            "range": "stddev: 0.00036433557593208504",
            "extra": "mean: 3.513618204633829 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 486578.2937930191,
            "unit": "iter/sec",
            "range": "stddev: 6.844354346222276e-7",
            "extra": "mean: 2.055167714541291 usec\nrounds: 1908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.62616666533857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005824872199239469",
            "extra": "mean: 10.457388755315106 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 95.84966339299382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008797830454812485",
            "extra": "mean: 10.43300481817963 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.687100463233719,
            "unit": "iter/sec",
            "range": "stddev: 0.004214417186150086",
            "extra": "mean: 1.455391247 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 134.53324886758358,
            "unit": "iter/sec",
            "range": "stddev: 0.0008372118808584398",
            "extra": "mean: 7.433106748089205 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.70606404889201,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534505201418981",
            "extra": "mean: 22.880120224995437 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5610.56397571613,
            "unit": "iter/sec",
            "range": "stddev: 0.00004834187621716829",
            "extra": "mean: 178.2352013680337 usec\nrounds: 2339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5386.747957763905,
            "unit": "iter/sec",
            "range": "stddev: 0.000050656534109860524",
            "extra": "mean: 185.64076282030288 usec\nrounds: 1872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.11085271847088,
            "unit": "iter/sec",
            "range": "stddev: 0.000060860993404788365",
            "extra": "mean: 7.56940084347958 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8364.261655094282,
            "unit": "iter/sec",
            "range": "stddev: 0.000013626426639319047",
            "extra": "mean: 119.55627899217458 usec\nrounds: 3294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.78778153509157,
            "unit": "iter/sec",
            "range": "stddev: 0.0008836322081344685",
            "extra": "mean: 10.021266978947097 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5139.598905513478,
            "unit": "iter/sec",
            "range": "stddev: 0.00002537958922539892",
            "extra": "mean: 194.56771206937088 usec\nrounds: 2063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.18071587336883,
            "unit": "iter/sec",
            "range": "stddev: 0.00021033576465277694",
            "extra": "mean: 11.739746370371174 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 299.02423753594474,
            "unit": "iter/sec",
            "range": "stddev: 0.00027851231906522516",
            "extra": "mean: 3.34421051698123 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.436154117839166,
            "unit": "iter/sec",
            "range": "stddev: 0.00028839646565788834",
            "extra": "mean: 23.5648121463397 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 59.14637871565509,
            "unit": "iter/sec",
            "range": "stddev: 0.00007158509176256447",
            "extra": "mean: 16.907205846151257 msec\nrounds: 52"
          }
        ]
      }
    ]
  }
}