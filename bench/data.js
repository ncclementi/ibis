window.BENCHMARK_DATA = {
  "lastUpdate": 1678811970652,
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
          "id": "116f8a3125a794e6b540e72478e9c70212e8ae61",
          "message": "chore(dev-deps): set the default nix environment python version to 3.10\n\nPrimarily for the ability to test PySpark integration, which is tied to Python 3.10 until PySpark 3.4.",
          "timestamp": "2023-03-14T12:34:25-04:00",
          "tree_id": "b9aa2271e74a6993e8cae65f640cf4e6cd98b9e9",
          "url": "https://github.com/ibis-project/ibis/commit/116f8a3125a794e6b540e72478e9c70212e8ae61"
        },
        "date": 1678811891324,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6714544.044203787,
            "unit": "iter/sec",
            "range": "stddev: 1.0993783634518936e-8",
            "extra": "mean: 148.93044016354085 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 263.5432256379621,
            "unit": "iter/sec",
            "range": "stddev: 0.006827292388868017",
            "extra": "mean: 3.794443957264652 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5754.292514786056,
            "unit": "iter/sec",
            "range": "stddev: 0.000052191554478971766",
            "extra": "mean: 173.78331001255677 usec\nrounds: 2387"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 148.7768903071026,
            "unit": "iter/sec",
            "range": "stddev: 0.00023195486591612397",
            "extra": "mean: 6.721473999999716 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4247.915047316049,
            "unit": "iter/sec",
            "range": "stddev: 0.001984325191441672",
            "extra": "mean: 235.40960420849936 usec\nrounds: 1996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5821322589027353,
            "unit": "iter/sec",
            "range": "stddev: 0.0024752231558717824",
            "extra": "mean: 387.2768315999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5483541.731315797,
            "unit": "iter/sec",
            "range": "stddev: 1.0188152019956557e-8",
            "extra": "mean: 182.36388979939366 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.629054352783834,
            "unit": "iter/sec",
            "range": "stddev: 0.00035307483409700895",
            "extra": "mean: 177.64973249999846 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 673.6438831539195,
            "unit": "iter/sec",
            "range": "stddev: 0.00005997396337356376",
            "extra": "mean: 1.4844638614071881 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 321.1586409815985,
            "unit": "iter/sec",
            "range": "stddev: 0.00020568567923391238",
            "extra": "mean: 3.1137259671530906 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 154.09652427752766,
            "unit": "iter/sec",
            "range": "stddev: 0.0037395993295780564",
            "extra": "mean: 6.48943903626925 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.041298931860027,
            "unit": "iter/sec",
            "range": "stddev: 0.0012289039298411055",
            "extra": "mean: 41.59509029999953 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6739422783763996,
            "unit": "iter/sec",
            "range": "stddev: 0.06538080827819231",
            "extra": "mean: 1.4838065990000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.2840311729827,
            "unit": "iter/sec",
            "range": "stddev: 0.00028204083228098036",
            "extra": "mean: 3.517608765690798 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4454.301814339811,
            "unit": "iter/sec",
            "range": "stddev: 0.00019239857099071913",
            "extra": "mean: 224.5020750009985 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16900058298096354,
            "unit": "iter/sec",
            "range": "stddev: 0.0074223400002421305",
            "extra": "mean: 5.917139351599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.467584903172579,
            "unit": "iter/sec",
            "range": "stddev: 0.001397437208751289",
            "extra": "mean: 95.5330201999999 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3864.727104300547,
            "unit": "iter/sec",
            "range": "stddev: 0.0025990187078298206",
            "extra": "mean: 258.7504817318748 usec\nrounds: 1478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.88274166277772,
            "unit": "iter/sec",
            "range": "stddev: 0.000060046391918232453",
            "extra": "mean: 8.34148423809771 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.55223314897198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941047697857396",
            "extra": "mean: 8.226915903506438 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 322.31594223611677,
            "unit": "iter/sec",
            "range": "stddev: 0.000164089363381098",
            "extra": "mean: 3.10254588421021 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.93601517965094,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215396919198443",
            "extra": "mean: 9.264748178220024 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.05925816121425,
            "unit": "iter/sec",
            "range": "stddev: 0.0006878320290306857",
            "extra": "mean: 9.703155425742665 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13515.035992175506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027286491059832974",
            "extra": "mean: 73.99166384602654 usec\nrounds: 6854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1970950.0522084206,
            "unit": "iter/sec",
            "range": "stddev: 9.491780516104092e-8",
            "extra": "mean: 507.36952916666496 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 104.5292792202264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005694218131889043",
            "extra": "mean: 9.566697555554368 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1126.1180416730203,
            "unit": "iter/sec",
            "range": "stddev: 0.00006615771906550725",
            "extra": "mean: 888.0063749927558 usec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.740052124709834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007823327100393377",
            "extra": "mean: 26.49704872413947 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 313.6090275830286,
            "unit": "iter/sec",
            "range": "stddev: 0.00020114798461911868",
            "extra": "mean: 3.188683717771001 msec\nrounds: 287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 484969.22171723837,
            "unit": "iter/sec",
            "range": "stddev: 3.127096987635537e-7",
            "extra": "mean: 2.0619865245449547 usec\nrounds: 2152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 99.65638250014631,
            "unit": "iter/sec",
            "range": "stddev: 0.012929887222266345",
            "extra": "mean: 10.034480230089947 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5314.288737551658,
            "unit": "iter/sec",
            "range": "stddev: 0.000054127374397062044",
            "extra": "mean: 188.171935960843 usec\nrounds: 2842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.390138739667746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009289802295954109",
            "extra": "mean: 64.97667220000571 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.08891552962297,
            "unit": "iter/sec",
            "range": "stddev: 0.00007184898628375819",
            "extra": "mean: 6.0942568653850975 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.36129725464636,
            "unit": "iter/sec",
            "range": "stddev: 0.00034175452058339616",
            "extra": "mean: 11.066684857145301 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 457.800672920195,
            "unit": "iter/sec",
            "range": "stddev: 0.0067135277143812976",
            "extra": "mean: 2.1843567717392207 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5465.799222175313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004990611069335823",
            "extra": "mean: 182.95586049756395 usec\nrounds: 2172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.41425704773947,
            "unit": "iter/sec",
            "range": "stddev: 0.0007296520092646569",
            "extra": "mean: 9.764265531251759 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.4055330617641,
            "unit": "iter/sec",
            "range": "stddev: 0.000030916475213178257",
            "extra": "mean: 2.9726027122639507 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 61.812147701666646,
            "unit": "iter/sec",
            "range": "stddev: 0.0006279464175867126",
            "extra": "mean: 16.17804973912979 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11971.763698490931,
            "unit": "iter/sec",
            "range": "stddev: 0.0000218623080128398",
            "extra": "mean: 83.52988124264868 usec\nrounds: 4185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.74531949280961,
            "unit": "iter/sec",
            "range": "stddev: 0.0007339658245701362",
            "extra": "mean: 9.368092247523416 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1984400.7372822864,
            "unit": "iter/sec",
            "range": "stddev: 1.4935708384694818e-7",
            "extra": "mean: 503.9304719114037 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 119.89179808263505,
            "unit": "iter/sec",
            "range": "stddev: 0.00073113228681659",
            "extra": "mean: 8.340854136750481 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1714.4590057512034,
            "unit": "iter/sec",
            "range": "stddev: 0.000021541128232721214",
            "extra": "mean: 583.2743720587488 usec\nrounds: 1360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7652282233525902,
            "unit": "iter/sec",
            "range": "stddev: 0.0028244175563869756",
            "extra": "mean: 566.4989867999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.28178793639324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015989313589693832",
            "extra": "mean: 3.4930618786766217 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8679260370324581,
            "unit": "iter/sec",
            "range": "stddev: 0.008979540135859757",
            "extra": "mean: 1.1521719101999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.06476101639477,
            "unit": "iter/sec",
            "range": "stddev: 0.0005497918981987647",
            "extra": "mean: 22.190287431818298 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 763263.3649064449,
            "unit": "iter/sec",
            "range": "stddev: 1.9899378316347778e-7",
            "extra": "mean: 1.3101637599527294 usec\nrounds: 25000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.8320843549167,
            "unit": "iter/sec",
            "range": "stddev: 0.00021308719717000023",
            "extra": "mean: 3.3241135238095705 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.608279207311575,
            "unit": "iter/sec",
            "range": "stddev: 0.00022865023477727255",
            "extra": "mean: 15.972328462961768 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.48097605783065,
            "unit": "iter/sec",
            "range": "stddev: 0.0007510330467685713",
            "extra": "mean: 8.512016443477151 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.92147397697912,
            "unit": "iter/sec",
            "range": "stddev: 0.00011946555079627629",
            "extra": "mean: 9.01538686916063 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.954709075438444,
            "unit": "iter/sec",
            "range": "stddev: 0.0014120705446967704",
            "extra": "mean: 27.81276849999949 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.103171576324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783186194090807",
            "extra": "mean: 8.326174795180268 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.34380632985113,
            "unit": "iter/sec",
            "range": "stddev: 0.00003214213102291594",
            "extra": "mean: 3.4560960978718955 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1805831.665146691,
            "unit": "iter/sec",
            "range": "stddev: 9.548567418243251e-8",
            "extra": "mean: 553.7614714042398 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5718.011214813805,
            "unit": "iter/sec",
            "range": "stddev: 0.000047798758116791084",
            "extra": "mean: 174.88598088252664 usec\nrounds: 2040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 103.36254194967796,
            "unit": "iter/sec",
            "range": "stddev: 0.015004070488553976",
            "extra": "mean: 9.674684669489357 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.7093493761236,
            "unit": "iter/sec",
            "range": "stddev: 0.00014334188368865183",
            "extra": "mean: 10.340261892475189 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6133302.075383008,
            "unit": "iter/sec",
            "range": "stddev: 1.0885570043474149e-8",
            "extra": "mean: 163.0443092003418 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.8931491410725,
            "unit": "iter/sec",
            "range": "stddev: 0.00020327380256315603",
            "extra": "mean: 7.358722690000263 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.26674336183876,
            "unit": "iter/sec",
            "range": "stddev: 0.0007284606454038197",
            "extra": "mean: 8.828716800000404 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5342.898321783577,
            "unit": "iter/sec",
            "range": "stddev: 0.00005302827650767788",
            "extra": "mean: 187.16433287208392 usec\nrounds: 2890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.53848057008368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008801420435979695",
            "extra": "mean: 13.238285870367914 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147431.76125593955,
            "unit": "iter/sec",
            "range": "stddev: 3.8001006475957695e-7",
            "extra": "mean: 6.782798980906248 usec\nrounds: 42195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 312.08698705955226,
            "unit": "iter/sec",
            "range": "stddev: 0.00024151480435507264",
            "extra": "mean: 3.2042348494625976 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 735.354357837437,
            "unit": "iter/sec",
            "range": "stddev: 0.000013991222795311146",
            "extra": "mean: 1.359888588871418 msec\nrounds: 647"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.41110462794823,
            "unit": "iter/sec",
            "range": "stddev: 0.0007323188266938341",
            "extra": "mean: 9.577525336632872 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.01192352252448,
            "unit": "iter/sec",
            "range": "stddev: 0.000190928547205849",
            "extra": "mean: 6.249534272108369 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 118.83955460778454,
            "unit": "iter/sec",
            "range": "stddev: 0.0007587863178811455",
            "extra": "mean: 8.414706730434812 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.00126824375654,
            "unit": "iter/sec",
            "range": "stddev: 0.02011958088231072",
            "extra": "mean: 12.986799085365488 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.17846070450807,
            "unit": "iter/sec",
            "range": "stddev: 0.0036654517132489023",
            "extra": "mean: 4.344455154228142 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8352.56228002099,
            "unit": "iter/sec",
            "range": "stddev: 0.000012336069563398743",
            "extra": "mean: 119.723740628904 usec\nrounds: 3308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1953683.5781100562,
            "unit": "iter/sec",
            "range": "stddev: 7.706158307136994e-8",
            "extra": "mean: 511.85361396515117 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8478037740476404,
            "unit": "iter/sec",
            "range": "stddev: 0.004736014957804039",
            "extra": "mean: 1.179518221799998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74851.98931375046,
            "unit": "iter/sec",
            "range": "stddev: 4.1692268051503816e-7",
            "extra": "mean: 13.359698374994263 usec\nrounds: 13908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8703272350507786,
            "unit": "iter/sec",
            "range": "stddev: 0.00604471703772814",
            "extra": "mean: 1.1489931139999954 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 197.39832411127247,
            "unit": "iter/sec",
            "range": "stddev: 0.000044997824549024195",
            "extra": "mean: 5.065899138213073 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 305.05474973914033,
            "unit": "iter/sec",
            "range": "stddev: 0.00019435405924950574",
            "extra": "mean: 3.2781000815595367 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12048241.976396637,
            "unit": "iter/sec",
            "range": "stddev: 3.52685675311156e-9",
            "extra": "mean: 82.99966102589298 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.04634572131609,
            "unit": "iter/sec",
            "range": "stddev: 0.039196984986581807",
            "extra": "mean: 34.42773867647438 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.06175725600318,
            "unit": "iter/sec",
            "range": "stddev: 0.0007252873483509654",
            "extra": "mean: 9.34040338613934 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.52764827026774,
            "unit": "iter/sec",
            "range": "stddev: 0.0003565549821360045",
            "extra": "mean: 17.690458219999528 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12740.685336364977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021595262777909905",
            "extra": "mean: 78.48871340898434 usec\nrounds: 5377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.17064933654082,
            "unit": "iter/sec",
            "range": "stddev: 0.0002384186519420597",
            "extra": "mean: 9.982964137931512 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5582.127204823137,
            "unit": "iter/sec",
            "range": "stddev: 0.000056835838541914",
            "extra": "mean: 179.14317666139317 usec\nrounds: 2468"
          }
        ]
      }
    ]
  }
}