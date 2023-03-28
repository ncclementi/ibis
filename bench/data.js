window.BENCHMARK_DATA = {
  "lastUpdate": 1680037880638,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "distinct": true,
          "id": "05839595ca203715e36d528dae83cd68a804a05d",
          "message": "feat(api): support passing a format string to `Table.relabel`",
          "timestamp": "2023-03-28T16:01:58-05:00",
          "tree_id": "fd9525092c73acbe4261be36853cc85a54269285",
          "url": "https://github.com/ibis-project/ibis/commit/05839595ca203715e36d528dae83cd68a804a05d"
        },
        "date": 1680037801167,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5454732.856317485,
            "unit": "iter/sec",
            "range": "stddev: 1.0197115954782214e-8",
            "extra": "mean: 183.32703476815087 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150992.00845704682,
            "unit": "iter/sec",
            "range": "stddev: 4.3431381279435177e-7",
            "extra": "mean: 6.622867065739266 usec\nrounds: 29240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5683.964498964227,
            "unit": "iter/sec",
            "range": "stddev: 0.000057674370377519416",
            "extra": "mean: 175.9335407851733 usec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1820023.4221745324,
            "unit": "iter/sec",
            "range": "stddev: 9.297826443782423e-8",
            "extra": "mean: 549.4434784829403 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.1674588930921,
            "unit": "iter/sec",
            "range": "stddev: 0.00008225606259331872",
            "extra": "mean: 6.0544613733342585 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5643.525323597611,
            "unit": "iter/sec",
            "range": "stddev: 0.00004736298528312158",
            "extra": "mean: 177.19420799241212 usec\nrounds: 1101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.4604110231659,
            "unit": "iter/sec",
            "range": "stddev: 0.00002007161308151274",
            "extra": "mean: 1.4546292178653213 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.4294376838162,
            "unit": "iter/sec",
            "range": "stddev: 0.0006278956488699632",
            "extra": "mean: 8.303617614037767 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.601361770211988,
            "unit": "iter/sec",
            "range": "stddev: 0.0017396564075463398",
            "extra": "mean: 178.52801533334173 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 104.05153432723998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005953043650231279",
            "extra": "mean: 9.610622336956801 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5073.6147906076185,
            "unit": "iter/sec",
            "range": "stddev: 0.00005469766808595988",
            "extra": "mean: 197.09813245010656 usec\nrounds: 3171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.8617227584097,
            "unit": "iter/sec",
            "range": "stddev: 0.000048223307980876325",
            "extra": "mean: 1.330031799372932 msec\nrounds: 638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.16189482638985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630429016279594",
            "extra": "mean: 8.253419950495802 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.58050963989035,
            "unit": "iter/sec",
            "range": "stddev: 0.0005777013168890806",
            "extra": "mean: 8.727487800000652 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.86973960137687,
            "unit": "iter/sec",
            "range": "stddev: 0.00023133693192897074",
            "extra": "mean: 16.98665573809692 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.80300180150286,
            "unit": "iter/sec",
            "range": "stddev: 0.00039681125746271516",
            "extra": "mean: 38.7551808000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.19005700793602,
            "unit": "iter/sec",
            "range": "stddev: 0.00737389709746089",
            "extra": "mean: 5.643657532968748 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5042.3694791952385,
            "unit": "iter/sec",
            "range": "stddev: 0.00003713969657100905",
            "extra": "mean: 198.31946154005354 usec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17210716782784743,
            "unit": "iter/sec",
            "range": "stddev: 0.06662311714567515",
            "extra": "mean: 5.810333251199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.87994222321647,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724163808429829",
            "extra": "mean: 8.27267106194842 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.06657142046013,
            "unit": "iter/sec",
            "range": "stddev: 0.0004995958733256039",
            "extra": "mean: 15.856260733330094 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11884.546659628282,
            "unit": "iter/sec",
            "range": "stddev: 0.000040824996465825016",
            "extra": "mean: 84.14288139378448 usec\nrounds: 4047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5234683553821013,
            "unit": "iter/sec",
            "range": "stddev: 0.003932776800736856",
            "extra": "mean: 396.27998419999244 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 776452.7324704594,
            "unit": "iter/sec",
            "range": "stddev: 1.5038134905315169e-7",
            "extra": "mean: 1.287908404698731 usec\nrounds: 24510"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6860208961915557,
            "unit": "iter/sec",
            "range": "stddev: 0.006478927985021096",
            "extra": "mean: 1.4576815452000063 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.0102560939639,
            "unit": "iter/sec",
            "range": "stddev: 0.00026093231338240744",
            "extra": "mean: 3.5086456666679178 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.44470737665273,
            "unit": "iter/sec",
            "range": "stddev: 0.004029206433333542",
            "extra": "mean: 4.265398059907687 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.57384031049297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008991345801898602",
            "extra": "mean: 8.293672967742197 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.90471856821851,
            "unit": "iter/sec",
            "range": "stddev: 0.0006852202632996731",
            "extra": "mean: 10.649092135594174 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6184466.583321794,
            "unit": "iter/sec",
            "range": "stddev: 7.70737241674818e-9",
            "extra": "mean: 161.69543266598353 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5358.727842055449,
            "unit": "iter/sec",
            "range": "stddev: 0.00008140430250452963",
            "extra": "mean: 186.61145508304628 usec\nrounds: 1692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1191.2388978898164,
            "unit": "iter/sec",
            "range": "stddev: 0.000010347911467400119",
            "extra": "mean: 839.4621782175005 usec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.01585155347102,
            "unit": "iter/sec",
            "range": "stddev: 0.00011703657329657647",
            "extra": "mean: 15.38086445238004 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7761220701531084,
            "unit": "iter/sec",
            "range": "stddev: 0.0008904442291699768",
            "extra": "mean: 563.0243646000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.93985434433627,
            "unit": "iter/sec",
            "range": "stddev: 0.013412882545391547",
            "extra": "mean: 10.532984349998173 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.3163528520767,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202272481649365",
            "extra": "mean: 22.565033800003675 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.70219878054934,
            "unit": "iter/sec",
            "range": "stddev: 0.0006226117374219322",
            "extra": "mean: 9.284861510001008 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.61523194998209,
            "unit": "iter/sec",
            "range": "stddev: 0.0006443535984370536",
            "extra": "mean: 9.468331239130224 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.91557333174603,
            "unit": "iter/sec",
            "range": "stddev: 0.00021638984108105457",
            "extra": "mean: 3.268875752577537 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.7228289587477,
            "unit": "iter/sec",
            "range": "stddev: 0.00002134470523443215",
            "extra": "mean: 3.451574746781122 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.67020951502285,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635175981603896",
            "extra": "mean: 10.562984967740181 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5279.012559561727,
            "unit": "iter/sec",
            "range": "stddev: 0.00005598682124295916",
            "extra": "mean: 189.42936557116693 usec\nrounds: 2678"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12739.510666644184,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033682043115463183",
            "extra": "mean: 78.49595060336945 usec\nrounds: 5142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6994463.64219158,
            "unit": "iter/sec",
            "range": "stddev: 5.38089172421081e-9",
            "extra": "mean: 142.9702191841742 nsec\nrounds: 61729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.52971432262163,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536792170101937",
            "extra": "mean: 13.239822352942404 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 306.1273574828194,
            "unit": "iter/sec",
            "range": "stddev: 0.00019264242607206278",
            "extra": "mean: 3.266614288323194 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 109.03148098655971,
            "unit": "iter/sec",
            "range": "stddev: 0.0005932244441157839",
            "extra": "mean: 9.171663000003363 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 44.20906099484568,
            "unit": "iter/sec",
            "range": "stddev: 0.0005415897134645975",
            "extra": "mean: 22.619797333324716 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 504523.1293663955,
            "unit": "iter/sec",
            "range": "stddev: 5.59552410289853e-7",
            "extra": "mean: 1.9820696848048345 usec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.95506374158273,
            "unit": "iter/sec",
            "range": "stddev: 0.00007068738293645427",
            "extra": "mean: 6.212914193277723 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 302.632149380653,
            "unit": "iter/sec",
            "range": "stddev: 0.00019328422600371485",
            "extra": "mean: 3.3043415977004886 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.53050266397141,
            "unit": "iter/sec",
            "range": "stddev: 0.0007863103989981043",
            "extra": "mean: 22.97239725714592 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.55803384070673,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617096323718156",
            "extra": "mean: 94.71460454544842 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.633737854866627,
            "unit": "iter/sec",
            "range": "stddev: 0.0011490896539745627",
            "extra": "mean: 63.96422975000249 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.34951145734806,
            "unit": "iter/sec",
            "range": "stddev: 0.00009309880921125017",
            "extra": "mean: 8.900795268519134 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.13267372026127,
            "unit": "iter/sec",
            "range": "stddev: 0.00021746926853743838",
            "extra": "mean: 3.224426462404916 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.8638211633779,
            "unit": "iter/sec",
            "range": "stddev: 0.00021888876656891277",
            "extra": "mean: 10.88567824999921 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 534.2602025412982,
            "unit": "iter/sec",
            "range": "stddev: 0.00002312280067533116",
            "extra": "mean: 1.8717471285402363 msec\nrounds: 459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14005.496487570937,
            "unit": "iter/sec",
            "range": "stddev: 0.000001663924989916483",
            "extra": "mean: 71.40053913029372 usec\nrounds: 6785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.13080615379548,
            "unit": "iter/sec",
            "range": "stddev: 0.0006305706901852043",
            "extra": "mean: 8.324259463636386 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5293.462787292148,
            "unit": "iter/sec",
            "range": "stddev: 0.00005714702647616707",
            "extra": "mean: 188.9122565290662 usec\nrounds: 3446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5523.848645808197,
            "unit": "iter/sec",
            "range": "stddev: 0.00002098558999230215",
            "extra": "mean: 181.03320060350595 usec\nrounds: 2318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 103.07528219858906,
            "unit": "iter/sec",
            "range": "stddev: 0.00007368950174661262",
            "extra": "mean: 9.701646977530064 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.13485254251562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005913542346346979",
            "extra": "mean: 8.323979085470645 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 165.03051408558542,
            "unit": "iter/sec",
            "range": "stddev: 0.004268049483002552",
            "extra": "mean: 6.05948545661923 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1981020.8742550705,
            "unit": "iter/sec",
            "range": "stddev: 8.686124652221951e-8",
            "extra": "mean: 504.7902387076225 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 283.2494823120911,
            "unit": "iter/sec",
            "range": "stddev: 0.0002295911181100963",
            "extra": "mean: 3.53045658490622 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.876231522353211,
            "unit": "iter/sec",
            "range": "stddev: 0.01445119808971109",
            "extra": "mean: 1.1412508845999922 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 112.90089013798622,
            "unit": "iter/sec",
            "range": "stddev: 0.0006337539597720313",
            "extra": "mean: 8.85732609174127 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1956612.2211670089,
            "unit": "iter/sec",
            "range": "stddev: 9.02047949496594e-8",
            "extra": "mean: 511.0874751684605 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8344.332090814183,
            "unit": "iter/sec",
            "range": "stddev: 0.00005870565170834476",
            "extra": "mean: 119.84182665750386 usec\nrounds: 2971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.30315897760418,
            "unit": "iter/sec",
            "range": "stddev: 0.0006106294823689333",
            "extra": "mean: 9.680246082472628 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.9676541978033,
            "unit": "iter/sec",
            "range": "stddev: 0.000050134919010716375",
            "extra": "mean: 6.136186993194624 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 314.2704847176169,
            "unit": "iter/sec",
            "range": "stddev: 0.00018967033426986788",
            "extra": "mean: 3.1819723729338927 msec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1784.1854240549987,
            "unit": "iter/sec",
            "range": "stddev: 0.000005168613313987739",
            "extra": "mean: 560.4798618560927 usec\nrounds: 1455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2585197.44831818,
            "unit": "iter/sec",
            "range": "stddev: 1.8063080932932133e-8",
            "extra": "mean: 386.81764932495497 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 341.7714065014674,
            "unit": "iter/sec",
            "range": "stddev: 0.00004935725863356989",
            "extra": "mean: 2.9259323073175416 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8857592706944486,
            "unit": "iter/sec",
            "range": "stddev: 0.013302460449796678",
            "extra": "mean: 1.1289749179999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11534891.727412038,
            "unit": "iter/sec",
            "range": "stddev: 3.3998994218781054e-9",
            "extra": "mean: 86.6934882122753 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5619.376434678189,
            "unit": "iter/sec",
            "range": "stddev: 0.00005892727187008421",
            "extra": "mean: 177.95568807756302 usec\nrounds: 2164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 138.96781678462054,
            "unit": "iter/sec",
            "range": "stddev: 0.0000533622713434436",
            "extra": "mean: 7.1959107017551505 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.86686810429214,
            "unit": "iter/sec",
            "range": "stddev: 0.0006348274994385073",
            "extra": "mean: 9.721303063160672 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8412127808134894,
            "unit": "iter/sec",
            "range": "stddev: 0.005148579553745761",
            "extra": "mean: 1.188759874799996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.03648209919834,
            "unit": "iter/sec",
            "range": "stddev: 0.0002658166085509896",
            "extra": "mean: 3.225426869861215 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 305.66016516561604,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733628169968262",
            "extra": "mean: 3.2716072094581556 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.14444716737357,
            "unit": "iter/sec",
            "range": "stddev: 0.0006549496258471618",
            "extra": "mean: 8.393173360359837 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72796.81633852428,
            "unit": "iter/sec",
            "range": "stddev: 9.910481337205313e-7",
            "extra": "mean: 13.736864471513943 usec\nrounds: 13606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.086426065732034,
            "unit": "iter/sec",
            "range": "stddev: 0.0017236846237004089",
            "extra": "mean: 24.338938568181913 msec\nrounds: 44"
          }
        ]
      }
    ]
  }
}