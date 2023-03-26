window.BENCHMARK_DATA = {
  "lastUpdate": 1679844922586,
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
          "id": "af9a2c8d56e372f937a4e1216cbc9bd72c963b18",
          "message": "test(duckdb): run tests in parallel using an in-memory database",
          "timestamp": "2023-03-26T11:29:58-04:00",
          "tree_id": "5b208980e001bc8594c196b2984e1e51351c2b64",
          "url": "https://github.com/ibis-project/ibis/commit/af9a2c8d56e372f937a4e1216cbc9bd72c963b18"
        },
        "date": 1679844836946,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 271.4613395234722,
            "unit": "iter/sec",
            "range": "stddev: 0.004279386905133877",
            "extra": "mean: 3.6837658053092084 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.554542310538714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002842720508760232",
            "extra": "mean: 20.595395454545372 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.50271605042823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005119335114411147",
            "extra": "mean: 8.583490873870698 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 123.02507448104475,
            "unit": "iter/sec",
            "range": "stddev: 0.0005745841386605112",
            "extra": "mean: 8.128424259999747 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 314.981991640084,
            "unit": "iter/sec",
            "range": "stddev: 0.00018805469833214786",
            "extra": "mean: 3.1747846751272557 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5042.278267453451,
            "unit": "iter/sec",
            "range": "stddev: 0.00011535687022980057",
            "extra": "mean: 198.32304901828422 usec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.79049602519035,
            "unit": "iter/sec",
            "range": "stddev: 0.00008457884628045425",
            "extra": "mean: 6.58802774999856 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5457.4513374952185,
            "unit": "iter/sec",
            "range": "stddev: 0.00006515324766358576",
            "extra": "mean: 183.23571538412756 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 111.15880325954289,
            "unit": "iter/sec",
            "range": "stddev: 0.00006929599652569444",
            "extra": "mean: 8.996138593406013 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 735870.7327375822,
            "unit": "iter/sec",
            "range": "stddev: 2.242587259600883e-7",
            "extra": "mean: 1.3589343284245121 usec\nrounds: 22780"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5300.148412803107,
            "unit": "iter/sec",
            "range": "stddev: 0.00004841285677553894",
            "extra": "mean: 188.67396195630806 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.645118155217355,
            "unit": "iter/sec",
            "range": "stddev: 0.00024020339696781602",
            "extra": "mean: 63.91770200000175 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.59161881387105,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168642154879956",
            "extra": "mean: 9.29440425773273 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.3570892283275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005496315317084497",
            "extra": "mean: 8.744538766664315 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.64485121761162,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449054994447653",
            "extra": "mean: 9.289807999998345 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.1106754396501,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698138958350201",
            "extra": "mean: 9.69831683999871 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 354.2856235563614,
            "unit": "iter/sec",
            "range": "stddev: 0.00003052037897876475",
            "extra": "mean: 2.822581367998737 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 323.8388020818326,
            "unit": "iter/sec",
            "range": "stddev: 0.00008465409168987789",
            "extra": "mean: 3.0879560867054607 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7649.93943659763,
            "unit": "iter/sec",
            "range": "stddev: 0.00005382387226568887",
            "extra": "mean: 130.71998913036595 usec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 178.43304680708982,
            "unit": "iter/sec",
            "range": "stddev: 0.004056962689729514",
            "extra": "mean: 5.604343017698593 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6366741.039469027,
            "unit": "iter/sec",
            "range": "stddev: 2.315922847877581e-8",
            "extra": "mean: 157.06622804345466 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.32173317821446,
            "unit": "iter/sec",
            "range": "stddev: 0.00007067721881062111",
            "extra": "mean: 3.492574555552766 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.28536097003223,
            "unit": "iter/sec",
            "range": "stddev: 0.00019877123186725013",
            "extra": "mean: 3.233260044586765 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2492654.6921453346,
            "unit": "iter/sec",
            "range": "stddev: 1.0538056809343118e-7",
            "extra": "mean: 401.178712459181 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2357866.3770467457,
            "unit": "iter/sec",
            "range": "stddev: 2.053593664385716e-8",
            "extra": "mean: 424.1122439060335 nsec\nrounds: 107527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 541.9162385720798,
            "unit": "iter/sec",
            "range": "stddev: 0.000058422581829264595",
            "extra": "mean: 1.8453036259532403 msec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 510815.8744283364,
            "unit": "iter/sec",
            "range": "stddev: 4.4539768173648997e-7",
            "extra": "mean: 1.957652551653996 usec\nrounds: 921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.8572458482037,
            "unit": "iter/sec",
            "range": "stddev: 0.00010898335501649249",
            "extra": "mean: 14.314907320751663 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1763.4215420550636,
            "unit": "iter/sec",
            "range": "stddev: 0.000005886882620394921",
            "extra": "mean: 567.079382978738 usec\nrounds: 1316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 44.64878863371706,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866658462534262",
            "extra": "mean: 22.397024210525576 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.65421568476543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005493620880496155",
            "extra": "mean: 9.741441141305282 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7781155533499173,
            "unit": "iter/sec",
            "range": "stddev: 0.0022223277735204283",
            "extra": "mean: 562.3931460000051 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9279919284479584,
            "unit": "iter/sec",
            "range": "stddev: 0.003905354220547551",
            "extra": "mean: 1.0775955796000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.334651333653158,
            "unit": "iter/sec",
            "range": "stddev: 0.0002682172384735977",
            "extra": "mean: 96.76185172727193 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5669.536851323712,
            "unit": "iter/sec",
            "range": "stddev: 0.00001871989606967199",
            "extra": "mean: 176.38125057190908 usec\nrounds: 2622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 121.73415773133344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687248816331534",
            "extra": "mean: 8.214621258619902 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.73876825836689,
            "unit": "iter/sec",
            "range": "stddev: 0.00011314602460989675",
            "extra": "mean: 8.421849196077838 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.30658337010397,
            "unit": "iter/sec",
            "range": "stddev: 0.00009981884790972609",
            "extra": "mean: 13.641339618179803 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 749.8256054134048,
            "unit": "iter/sec",
            "range": "stddev: 0.000011889975958251736",
            "extra": "mean: 1.3336434402619066 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 284.39910368412,
            "unit": "iter/sec",
            "range": "stddev: 0.005895114519166335",
            "extra": "mean: 3.5161854838709075 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.4938728785777,
            "unit": "iter/sec",
            "range": "stddev: 0.00024069345371783595",
            "extra": "mean: 3.5027021417909947 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13412.367248993427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016640662048518529",
            "extra": "mean: 74.55805387934396 usec\nrounds: 7424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6946894.853083761,
            "unit": "iter/sec",
            "range": "stddev: 9.366431771139483e-9",
            "extra": "mean: 143.94920624906658 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.63006994840455,
            "unit": "iter/sec",
            "range": "stddev: 0.00007890924946450064",
            "extra": "mean: 6.264483880281571 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8533847602014573,
            "unit": "iter/sec",
            "range": "stddev: 0.0034598470339022775",
            "extra": "mean: 1.1718043802000069 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.8040235893744,
            "unit": "iter/sec",
            "range": "stddev: 0.00003433731047874296",
            "extra": "mean: 5.240979625000364 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.2509626272743,
            "unit": "iter/sec",
            "range": "stddev: 0.000582427289107868",
            "extra": "mean: 8.179894689654565 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.7768853701108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004312901508479424",
            "extra": "mean: 1.4646072844981168 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.12984021772064,
            "unit": "iter/sec",
            "range": "stddev: 0.000028204272789668316",
            "extra": "mean: 7.187530715446279 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5845541.515190233,
            "unit": "iter/sec",
            "range": "stddev: 9.573136119213996e-9",
            "extra": "mean: 171.07054964862576 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 107.99155397870825,
            "unit": "iter/sec",
            "range": "stddev: 0.010900333799845185",
            "extra": "mean: 9.25998342608498 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.13634618041696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005256482742239915",
            "extra": "mean: 9.247584510869075 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 39.256043466492414,
            "unit": "iter/sec",
            "range": "stddev: 0.021211267872829568",
            "extra": "mean: 25.473784714283926 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.60430082206917,
            "unit": "iter/sec",
            "range": "stddev: 0.001791718038126261",
            "extra": "mean: 383.98021900000003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9254786936601317,
            "unit": "iter/sec",
            "range": "stddev: 0.0013670168192804048",
            "extra": "mean: 1.080521903800019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.186691348132285,
            "unit": "iter/sec",
            "range": "stddev: 0.0006446931152760532",
            "extra": "mean: 35.47773620000498 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 309.07645414726403,
            "unit": "iter/sec",
            "range": "stddev: 0.00018184555857580974",
            "extra": "mean: 3.235445426468932 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.123558700325425,
            "unit": "iter/sec",
            "range": "stddev: 0.00014449926671245762",
            "extra": "mean: 16.632415339622725 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.73665099022867,
            "unit": "iter/sec",
            "range": "stddev: 0.0005816265797812363",
            "extra": "mean: 8.2144530169494 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.8048828642731,
            "unit": "iter/sec",
            "range": "stddev: 0.000036149766561250046",
            "extra": "mean: 10.019549858697019 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5816.319357771619,
            "unit": "iter/sec",
            "range": "stddev: 0.00004208635194617596",
            "extra": "mean: 171.9300365898625 usec\nrounds: 2733"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5647.45454094997,
            "unit": "iter/sec",
            "range": "stddev: 0.00004348655327643454",
            "extra": "mean: 177.0709250953595 usec\nrounds: 3391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11958.956724008287,
            "unit": "iter/sec",
            "range": "stddev: 0.000005012959884240827",
            "extra": "mean: 83.61933428460719 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17987560557444798,
            "unit": "iter/sec",
            "range": "stddev: 0.14592410065609557",
            "extra": "mean: 5.559397544800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.7905185494147,
            "unit": "iter/sec",
            "range": "stddev: 0.00006394965752717096",
            "extra": "mean: 6.105359509551253 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.48437135524222,
            "unit": "iter/sec",
            "range": "stddev: 0.00005968651051065839",
            "extra": "mean: 8.969867146790687 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69933.44477936496,
            "unit": "iter/sec",
            "range": "stddev: 6.197203555512469e-7",
            "extra": "mean: 14.299309910371623 usec\nrounds: 13107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 316.94712714261493,
            "unit": "iter/sec",
            "range": "stddev: 0.00018797430387108459",
            "extra": "mean: 3.155100375937579 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1188.8439214371574,
            "unit": "iter/sec",
            "range": "stddev: 0.000015573718932493173",
            "extra": "mean: 841.1533103446669 usec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2537357.0544796987,
            "unit": "iter/sec",
            "range": "stddev: 1.6427872148888903e-8",
            "extra": "mean: 394.11087148112153 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.86168444888197,
            "unit": "iter/sec",
            "range": "stddev: 0.00007935413316660017",
            "extra": "mean: 13.357968196438767 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 261.22110856051086,
            "unit": "iter/sec",
            "range": "stddev: 0.003724015375441335",
            "extra": "mean: 3.828174551094342 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.661483045623318,
            "unit": "iter/sec",
            "range": "stddev: 0.066644024472891",
            "extra": "mean: 1.5117545439999844 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11496.69391193502,
            "unit": "iter/sec",
            "range": "stddev: 0.000013023106521375166",
            "extra": "mean: 86.98152770353167 usec\nrounds: 4855"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.324173153850566,
            "unit": "iter/sec",
            "range": "stddev: 0.00009759258972634778",
            "extra": "mean: 20.2740347391294 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5783.878700355556,
            "unit": "iter/sec",
            "range": "stddev: 0.00004469314665452581",
            "extra": "mean: 172.89435892535684 usec\nrounds: 2605"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 300.90830005587463,
            "unit": "iter/sec",
            "range": "stddev: 0.00019488524445296617",
            "extra": "mean: 3.3232715741450582 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 121.67720912729744,
            "unit": "iter/sec",
            "range": "stddev: 0.0005907730702083683",
            "extra": "mean: 8.218465949147554 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 139355.6307726441,
            "unit": "iter/sec",
            "range": "stddev: 2.847511806336909e-7",
            "extra": "mean: 7.175885139736333 usec\nrounds: 41494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5422.374035931821,
            "unit": "iter/sec",
            "range": "stddev: 0.00007397860475340857",
            "extra": "mean: 184.42106600788054 usec\nrounds: 2530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.75457617821633,
            "unit": "iter/sec",
            "range": "stddev: 0.000543369233084509",
            "extra": "mean: 10.666146024692368 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 104.94411002029142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005249228850336233",
            "extra": "mean: 9.528881609521921 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5816.108418943669,
            "unit": "iter/sec",
            "range": "stddev: 0.00004370020805487957",
            "extra": "mean: 171.93627215457266 usec\nrounds: 3329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.88745633457994,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158710638737821",
            "extra": "mean: 9.719357787873555 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.535663875257548,
            "unit": "iter/sec",
            "range": "stddev: 0.00025971218636020347",
            "extra": "mean: 180.64680633331895 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.39458323389994,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367209561433317",
            "extra": "mean: 10.593828223406678 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2551190.3121295725,
            "unit": "iter/sec",
            "range": "stddev: 1.7227013608938468e-8",
            "extra": "mean: 391.9738936154762 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11863061.6338391,
            "unit": "iter/sec",
            "range": "stddev: 1.0373053215685025e-8",
            "extra": "mean: 84.2952713949224 nsec\nrounds: 114943"
          }
        ]
      }
    ]
  }
}