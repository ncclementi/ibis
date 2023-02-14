window.BENCHMARK_DATA = {
  "lastUpdate": 1676375555256,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c628d3b7695322c493a5fd9f8b968c8d199470d9",
          "message": "chore(deps): pre-commit.ci autoupdate\n\nupdates:\n- [github.com/charliermarsh/ruff-pre-commit: v0.0.243 → v0.0.246](https://github.com/charliermarsh/ruff-pre-commit/compare/v0.0.243...v0.0.246)",
          "timestamp": "2023-02-14T06:45:07-05:00",
          "tree_id": "ab22306cf2d4780960d0383fd7b9320fb831919e",
          "url": "https://github.com/ibis-project/ibis/commit/c628d3b7695322c493a5fd9f8b968c8d199470d9"
        },
        "date": 1676375461463,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 62.128321866927344,
            "unit": "iter/sec",
            "range": "stddev: 0.0007423160200045217",
            "extra": "mean: 16.095718827588808 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3746.666711544277,
            "unit": "iter/sec",
            "range": "stddev: 0.00005797462925650288",
            "extra": "mean: 266.90391139376965 usec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 102.24546752730055,
            "unit": "iter/sec",
            "range": "stddev: 0.01316237502828384",
            "extra": "mean: 9.780384638888664 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1368079.9950243873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010664761601565226",
            "extra": "mean: 730.9514090089257 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 142.67789783702744,
            "unit": "iter/sec",
            "range": "stddev: 0.0009051065109565226",
            "extra": "mean: 7.008794040000794 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 150.64798172066025,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133335577738834",
            "extra": "mean: 6.637991352942616 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.50010646936888,
            "unit": "iter/sec",
            "range": "stddev: 0.006362807452048739",
            "extra": "mean: 222.21696460000544 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3955.6691649308773,
            "unit": "iter/sec",
            "range": "stddev: 0.00007027944536287162",
            "extra": "mean: 252.80172792647446 usec\nrounds: 1529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 214.2840600598663,
            "unit": "iter/sec",
            "range": "stddev: 0.000639468601637312",
            "extra": "mean: 4.666702692307686 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 77.71462846483912,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406040182289621",
            "extra": "mean: 12.867590307691374 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.551098277608407,
            "unit": "iter/sec",
            "range": "stddev: 0.001285442700443758",
            "extra": "mean: 32.732047500005024 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 350.2746435759951,
            "unit": "iter/sec",
            "range": "stddev: 0.00018343952980515767",
            "extra": "mean: 2.8549026266671262 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1554714.4564057866,
            "unit": "iter/sec",
            "range": "stddev: 5.524239049663761e-7",
            "extra": "mean: 643.2049280044748 nsec\nrounds: 18182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 229.46703607176704,
            "unit": "iter/sec",
            "range": "stddev: 0.0006823484409316643",
            "extra": "mean: 4.35792441964189 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.80323804830181,
            "unit": "iter/sec",
            "range": "stddev: 0.0004577613993828715",
            "extra": "mean: 12.530819857143374 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 209.64726590174732,
            "unit": "iter/sec",
            "range": "stddev: 0.0007607174385377656",
            "extra": "mean: 4.769916725117976 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.33433106731076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006623499782777299",
            "extra": "mean: 5.172387100001617 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 127.05306815692737,
            "unit": "iter/sec",
            "range": "stddev: 0.0004166340628828488",
            "extra": "mean: 7.870726890002117 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 850.7095741428058,
            "unit": "iter/sec",
            "range": "stddev: 0.00011995657954139452",
            "extra": "mean: 1.175489297869514 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 84.47476904783262,
            "unit": "iter/sec",
            "range": "stddev: 0.0014226194642717933",
            "extra": "mean: 11.837854205126792 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 229.1415902823088,
            "unit": "iter/sec",
            "range": "stddev: 0.0004614954500990374",
            "extra": "mean: 4.3641139034078105 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.34131754415417,
            "unit": "iter/sec",
            "range": "stddev: 0.002112882316406424",
            "extra": "mean: 29.992815931034876 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 133.70748470983415,
            "unit": "iter/sec",
            "range": "stddev: 0.001121490981065475",
            "extra": "mean: 7.479012877776843 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1305968.9564474018,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014146462300266694",
            "extra": "mean: 765.7149850791842 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 221.54284935565553,
            "unit": "iter/sec",
            "range": "stddev: 0.00037586585191751024",
            "extra": "mean: 4.513799488037829 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8280.286546408755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001004182986843859",
            "extra": "mean: 120.7687674086243 usec\nrounds: 4179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 214.99001196717543,
            "unit": "iter/sec",
            "range": "stddev: 0.000419294270998337",
            "extra": "mean: 4.651378874999456 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 473.74609226590064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002513092362129945",
            "extra": "mean: 2.1108353532101063 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 90.39875926447043,
            "unit": "iter/sec",
            "range": "stddev: 0.001070108165118169",
            "extra": "mean: 11.06209872941289 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4585.3647723147,
            "unit": "iter/sec",
            "range": "stddev: 0.00007387208289088419",
            "extra": "mean: 218.08515781290794 usec\nrounds: 1939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 73.89062466001945,
            "unit": "iter/sec",
            "range": "stddev: 0.0030330748378218863",
            "extra": "mean: 13.533516661973456 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4411550.224342683,
            "unit": "iter/sec",
            "range": "stddev: 2.8513358660397224e-7",
            "extra": "mean: 226.67768678721106 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3676636.223155167,
            "unit": "iter/sec",
            "range": "stddev: 4.829495972829788e-7",
            "extra": "mean: 271.9877462182896 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.87700983153574,
            "unit": "iter/sec",
            "range": "stddev: 0.0021554858962136813",
            "extra": "mean: 13.355234166667174 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3415.54010667682,
            "unit": "iter/sec",
            "range": "stddev: 0.00012904261979697227",
            "extra": "mean: 292.7794635012964 usec\nrounds: 1685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 66.48776762452472,
            "unit": "iter/sec",
            "range": "stddev: 0.019599859241629762",
            "extra": "mean: 15.040360591549463 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 53532.002877424406,
            "unit": "iter/sec",
            "range": "stddev: 0.000006496479280590955",
            "extra": "mean: 18.680414448339675 usec\nrounds: 10894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.232725752288374,
            "unit": "iter/sec",
            "range": "stddev: 0.0020366995736651725",
            "extra": "mean: 28.3827032580654 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.54774295874866,
            "unit": "iter/sec",
            "range": "stddev: 0.0006352982477461146",
            "extra": "mean: 17.684171775511818 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 127.31773393238939,
            "unit": "iter/sec",
            "range": "stddev: 0.0009189943864112559",
            "extra": "mean: 7.854365366972668 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4687.887263728187,
            "unit": "iter/sec",
            "range": "stddev: 0.00008913887411959658",
            "extra": "mean: 213.31570998674556 usec\nrounds: 2924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9467.108721830697,
            "unit": "iter/sec",
            "range": "stddev: 0.000027530419571142114",
            "extra": "mean: 105.6288703745472 usec\nrounds: 4459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 536853.8393050176,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013909506620656642",
            "extra": "mean: 1.8627043839242106 usec\nrounds: 15625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 106.4200689824196,
            "unit": "iter/sec",
            "range": "stddev: 0.0006931561933026938",
            "extra": "mean: 9.396723846939043 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.60022653899174,
            "unit": "iter/sec",
            "range": "stddev: 0.001130862937316874",
            "extra": "mean: 28.089708892855874 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 327989.7779276913,
            "unit": "iter/sec",
            "range": "stddev: 0.000002308825234962847",
            "extra": "mean: 3.0488755055667016 usec\nrounds: 1976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4640.997344538608,
            "unit": "iter/sec",
            "range": "stddev: 0.00006790512466323887",
            "extra": "mean: 215.47092699304628 usec\nrounds: 2082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 127.8288678601233,
            "unit": "iter/sec",
            "range": "stddev: 0.0006874298718423501",
            "extra": "mean: 7.822959060345037 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3983523.3296886734,
            "unit": "iter/sec",
            "range": "stddev: 7.53784806556646e-7",
            "extra": "mean: 251.0340513250955 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 541.2846606559192,
            "unit": "iter/sec",
            "range": "stddev: 0.00013303196918362523",
            "extra": "mean: 1.8474567499995616 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 131.07654175154224,
            "unit": "iter/sec",
            "range": "stddev: 0.001164639179405657",
            "extra": "mean: 7.629130175676412 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 7921823.798389515,
            "unit": "iter/sec",
            "range": "stddev: 2.2769907367494881e-7",
            "extra": "mean: 126.23355750519764 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.92852302933572,
            "unit": "iter/sec",
            "range": "stddev: 0.004869325242868635",
            "extra": "mean: 23.85011270967832 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.93227311400958,
            "unit": "iter/sec",
            "range": "stddev: 0.003043238517092544",
            "extra": "mean: 47.773120222223675 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17434.86770234136,
            "unit": "iter/sec",
            "range": "stddev: 0.000040929855795094845",
            "extra": "mean: 57.356328540749885 usec\nrounds: 4660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 236.533606702667,
            "unit": "iter/sec",
            "range": "stddev: 0.0002990636186774728",
            "extra": "mean: 4.227729048485881 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10064.034985139255,
            "unit": "iter/sec",
            "range": "stddev: 0.000021153178134731862",
            "extra": "mean: 99.36372453758548 usec\nrounds: 6382"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 217.1993557029132,
            "unit": "iter/sec",
            "range": "stddev: 0.0008452396733358764",
            "extra": "mean: 4.604065222770767 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.308743643568906,
            "unit": "iter/sec",
            "range": "stddev: 0.025013946948974936",
            "extra": "mean: 764.0915811999889 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.023027203274026,
            "unit": "iter/sec",
            "range": "stddev: 0.0037288297308526184",
            "extra": "mean: 124.64123262500237 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 133.2135645622629,
            "unit": "iter/sec",
            "range": "stddev: 0.001004384059666031",
            "extra": "mean: 7.506743050424181 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.7606230577295,
            "unit": "iter/sec",
            "range": "stddev: 0.0003505350070524922",
            "extra": "mean: 7.951614549022688 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.40961865667508,
            "unit": "iter/sec",
            "range": "stddev: 0.0005190515738861401",
            "extra": "mean: 11.18447897468292 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 84.88226376103401,
            "unit": "iter/sec",
            "range": "stddev: 0.0010064618940897826",
            "extra": "mean: 11.781024158536395 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9108591242839272,
            "unit": "iter/sec",
            "range": "stddev: 0.011373317061949328",
            "extra": "mean: 523.3248162000109 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4552.034197121475,
            "unit": "iter/sec",
            "range": "stddev: 0.00006630218447290027",
            "extra": "mean: 219.68200516427584 usec\nrounds: 1549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.835581985114557,
            "unit": "iter/sec",
            "range": "stddev: 0.0017523158699493315",
            "extra": "mean: 84.49098669230509 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 117779.44084747556,
            "unit": "iter/sec",
            "range": "stddev: 0.00001295665993968707",
            "extra": "mean: 8.49044614921377 usec\nrounds: 36629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1106349532987985,
            "unit": "iter/sec",
            "range": "stddev: 0.18054762123986962",
            "extra": "mean: 9.038734777599984 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3898.151032425941,
            "unit": "iter/sec",
            "range": "stddev: 0.00007476409507511742",
            "extra": "mean: 256.53187669787866 usec\nrounds: 1914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.1545312030962,
            "unit": "iter/sec",
            "range": "stddev: 0.0010126225702935172",
            "extra": "mean: 12.795163435903042 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.63383494371544,
            "unit": "iter/sec",
            "range": "stddev: 0.0009976787477852906",
            "extra": "mean: 14.785499015872682 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6242508928421472,
            "unit": "iter/sec",
            "range": "stddev: 0.020621601732254146",
            "extra": "mean: 1.6019200155999898 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7128470071474784,
            "unit": "iter/sec",
            "range": "stddev: 0.04126250348140732",
            "extra": "mean: 1.4028255571999808 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 134.93875388321794,
            "unit": "iter/sec",
            "range": "stddev: 0.0009546364912090442",
            "extra": "mean: 7.410769487803667 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7086237568158131,
            "unit": "iter/sec",
            "range": "stddev: 0.020711691043353336",
            "extra": "mean: 1.4111861060000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4944371966186827,
            "unit": "iter/sec",
            "range": "stddev: 0.030304033090710156",
            "extra": "mean: 2.0225015569999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1283.6390621353141,
            "unit": "iter/sec",
            "range": "stddev: 0.00006918942447244298",
            "extra": "mean: 779.0351894842738 usec\nrounds: 913"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 230.99248861850413,
            "unit": "iter/sec",
            "range": "stddev: 0.00024793034298864486",
            "extra": "mean: 4.329145098962724 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 217.76356787897123,
            "unit": "iter/sec",
            "range": "stddev: 0.00037005829729271365",
            "extra": "mean: 4.592136369458185 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1278453.150199864,
            "unit": "iter/sec",
            "range": "stddev: 0.000001289576490184643",
            "extra": "mean: 782.1952645223387 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 54.4202798870859,
            "unit": "iter/sec",
            "range": "stddev: 0.000840095102520323",
            "extra": "mean: 18.37550270000179 msec\nrounds: 40"
          }
        ]
      }
    ]
  }
}