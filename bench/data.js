window.BENCHMARK_DATA = {
  "lastUpdate": 1681936086777,
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
          "id": "e4b515daa6f96eaa6826c8623e5a885d05a4b3c4",
          "message": "feat(duckdb): set `header=True` by default\n\nBREAKING CHANGE: Some CSV files may now have headers that did not have them previously. Set `header=False` to get the previous behavior.",
          "timestamp": "2023-04-19T16:22:41-04:00",
          "tree_id": "2fe6b7e11e63d80daad9a982b28701d0bac4f4f3",
          "url": "https://github.com/ibis-project/ibis/commit/e4b515daa6f96eaa6826c8623e5a885d05a4b3c4"
        },
        "date": 1681936002091,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140588.44098335053,
            "unit": "iter/sec",
            "range": "stddev: 3.3056867662193165e-7",
            "extra": "mean: 7.112960304598776 usec\nrounds: 24814"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 373.0415938060004,
            "unit": "iter/sec",
            "range": "stddev: 0.00006010579293710193",
            "extra": "mean: 2.6806662222230595 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.77807183598033,
            "unit": "iter/sec",
            "range": "stddev: 0.007452596108827037",
            "extra": "mean: 12.379597300001137 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.88686298186664,
            "unit": "iter/sec",
            "range": "stddev: 0.00017672996608524634",
            "extra": "mean: 14.730390477272627 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.98617991184454,
            "unit": "iter/sec",
            "range": "stddev: 0.004133313566928269",
            "extra": "mean: 5.682264371559873 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.746794201617883,
            "unit": "iter/sec",
            "range": "stddev: 0.0003418005135041585",
            "extra": "mean: 174.01005933333616 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 96.14083740307053,
            "unit": "iter/sec",
            "range": "stddev: 0.0007289578334034096",
            "extra": "mean: 10.40140721686768 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.33149254158067,
            "unit": "iter/sec",
            "range": "stddev: 0.00948317421742802",
            "extra": "mean: 11.450623032966892 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.053482822332,
            "unit": "iter/sec",
            "range": "stddev: 0.00003173556441774449",
            "extra": "mean: 1.3476117599995519 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2264.9423504725005,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289662860076825",
            "extra": "mean: 441.51234127057813 usec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 78.5486591479563,
            "unit": "iter/sec",
            "range": "stddev: 0.012123836037973677",
            "extra": "mean: 12.730962066664611 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 191.9502580954565,
            "unit": "iter/sec",
            "range": "stddev: 0.00004282352223412239",
            "extra": "mean: 5.209683018517755 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9296058809813071,
            "unit": "iter/sec",
            "range": "stddev: 0.0035086208467624423",
            "extra": "mean: 1.0757246919999943 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1613691.6338232907,
            "unit": "iter/sec",
            "range": "stddev: 1.1970831495681342e-7",
            "extra": "mean: 619.6970840275834 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.871080312378226,
            "unit": "iter/sec",
            "range": "stddev: 0.000819080983048813",
            "extra": "mean: 22.286069179487484 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2378.840414589752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000753104859585495",
            "extra": "mean: 420.3728816220138 usec\nrounds: 1208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2358.8879630001666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007904561899389882",
            "extra": "mean: 423.9285695994411 usec\nrounds: 1796"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.222641598621598,
            "unit": "iter/sec",
            "range": "stddev: 0.00027028036542535227",
            "extra": "mean: 89.10558100000478 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1557.7579781995548,
            "unit": "iter/sec",
            "range": "stddev: 0.004241782976563164",
            "extra": "mean: 641.948244845963 usec\nrounds: 388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.06111148524015,
            "unit": "iter/sec",
            "range": "stddev: 0.0007843031571546033",
            "extra": "mean: 9.895002986841765 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9349011682767224,
            "unit": "iter/sec",
            "range": "stddev: 0.0029722623822041236",
            "extra": "mean: 1.0696317792000116 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6711619692550366,
            "unit": "iter/sec",
            "range": "stddev: 0.0014960940258856867",
            "extra": "mean: 598.386044199998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2073.483212288101,
            "unit": "iter/sec",
            "range": "stddev: 0.0024637759773134924",
            "extra": "mean: 482.28024903876315 usec\nrounds: 1301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.84326609425239,
            "unit": "iter/sec",
            "range": "stddev: 0.00004027792962188443",
            "extra": "mean: 9.359504221050715 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 99.42353069756064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006307384367865824",
            "extra": "mean: 10.057981173912736 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.69470617951265,
            "unit": "iter/sec",
            "range": "stddev: 0.00004798618478461487",
            "extra": "mean: 6.301407426085263 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.066665425995474,
            "unit": "iter/sec",
            "range": "stddev: 0.00013414777246335607",
            "extra": "mean: 18.15980670454629 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 270.0748547949205,
            "unit": "iter/sec",
            "range": "stddev: 0.0003088641236187198",
            "extra": "mean: 3.7026771735537665 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 271.03405131199236,
            "unit": "iter/sec",
            "range": "stddev: 0.00024286546730930037",
            "extra": "mean: 3.6895733032779754 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6438576.829712521,
            "unit": "iter/sec",
            "range": "stddev: 8.212815676164706e-9",
            "extra": "mean: 155.31382578019864 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 282.86474941738356,
            "unit": "iter/sec",
            "range": "stddev: 0.00029405642344312155",
            "extra": "mean: 3.535258465608386 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13735.867758768281,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016206961725688534",
            "extra": "mean: 72.80209867786843 usec\nrounds: 7033"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.7630305826813,
            "unit": "iter/sec",
            "range": "stddev: 0.00006478696818587292",
            "extra": "mean: 1.866496833333997 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 278.0275905055219,
            "unit": "iter/sec",
            "range": "stddev: 0.00024219975297278868",
            "extra": "mean: 3.596765336065231 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.7584813379321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754035445589943",
            "extra": "mean: 13.557762875002766 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.47877167668857,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951889127936582",
            "extra": "mean: 10.052395934783497 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1887625.0885632958,
            "unit": "iter/sec",
            "range": "stddev: 8.813890297061865e-8",
            "extra": "mean: 529.766215790826 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17881445776606333,
            "unit": "iter/sec",
            "range": "stddev: 0.057085553638851344",
            "extra": "mean: 5.592388962800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.48846528792156,
            "unit": "iter/sec",
            "range": "stddev: 0.021070459151628314",
            "extra": "mean: 25.98181019999828 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 707731.2568402784,
            "unit": "iter/sec",
            "range": "stddev: 0.000009843506564013076",
            "extra": "mean: 1.4129657130936653 usec\nrounds: 23420"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 112.47994454454836,
            "unit": "iter/sec",
            "range": "stddev: 0.0001824611796495366",
            "extra": "mean: 8.890473800011023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5872401.043441761,
            "unit": "iter/sec",
            "range": "stddev: 9.058396306173206e-9",
            "extra": "mean: 170.28809725412736 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 252.32393234882338,
            "unit": "iter/sec",
            "range": "stddev: 0.0038626617843136226",
            "extra": "mean: 3.9631595413532055 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 498767.9670695064,
            "unit": "iter/sec",
            "range": "stddev: 4.268942726372325e-7",
            "extra": "mean: 2.004940304958766 usec\nrounds: 2228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 82.53318666091543,
            "unit": "iter/sec",
            "range": "stddev: 0.016495815380942757",
            "extra": "mean: 12.116338172043003 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.43537804630218,
            "unit": "iter/sec",
            "range": "stddev: 0.0006778692569408068",
            "extra": "mean: 10.478294532608569 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.06228134225248,
            "unit": "iter/sec",
            "range": "stddev: 0.0000556598276853431",
            "extra": "mean: 10.094659505620283 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7064813688191585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011687843518244025",
            "extra": "mean: 1.4154654944000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.18570673603855,
            "unit": "iter/sec",
            "range": "stddev: 0.00002936092343204635",
            "extra": "mean: 7.565114449150682 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 86.58830720176535,
            "unit": "iter/sec",
            "range": "stddev: 0.015420883292868597",
            "extra": "mean: 11.548903452631675 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 247.93236121713142,
            "unit": "iter/sec",
            "range": "stddev: 0.00042835536170172874",
            "extra": "mean: 4.0333581106188525 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.547952088859289,
            "unit": "iter/sec",
            "range": "stddev: 0.0023392786456060293",
            "extra": "mean: 392.47205799999847 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7896.581929885492,
            "unit": "iter/sec",
            "range": "stddev: 0.000021773190423514776",
            "extra": "mean: 126.63707017531077 usec\nrounds: 3591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 94.70989630141635,
            "unit": "iter/sec",
            "range": "stddev: 0.0007100337704281124",
            "extra": "mean: 10.558558704546332 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2381.3770956055546,
            "unit": "iter/sec",
            "range": "stddev: 0.00008997298010902924",
            "extra": "mean: 419.9250936969781 usec\nrounds: 1761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69223.89958230396,
            "unit": "iter/sec",
            "range": "stddev: 6.769490921439289e-7",
            "extra": "mean: 14.445877883707592 usec\nrounds: 13004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2307.027827952768,
            "unit": "iter/sec",
            "range": "stddev: 0.00008566049489578107",
            "extra": "mean: 433.45814380028065 usec\nrounds: 1363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.72804728898944,
            "unit": "iter/sec",
            "range": "stddev: 0.00024390835468753852",
            "extra": "mean: 3.6267619846156025 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.92994373751862,
            "unit": "iter/sec",
            "range": "stddev: 0.0007970514049955536",
            "extra": "mean: 23.293764513510183 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11485.046705503417,
            "unit": "iter/sec",
            "range": "stddev: 0.000015194889902787979",
            "extra": "mean: 87.0697373412351 usec\nrounds: 4641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.36086744567113,
            "unit": "iter/sec",
            "range": "stddev: 0.01860785612816377",
            "extra": "mean: 11.853837333334743 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1182.0222053864254,
            "unit": "iter/sec",
            "range": "stddev: 0.000014234005959109067",
            "extra": "mean: 846.0077953214771 usec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 682.8651687690419,
            "unit": "iter/sec",
            "range": "stddev: 0.00002069606357282847",
            "extra": "mean: 1.4644179345135395 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.44626812945457,
            "unit": "iter/sec",
            "range": "stddev: 0.00014653799418069195",
            "extra": "mean: 16.821913830189075 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.37798186466023,
            "unit": "iter/sec",
            "range": "stddev: 0.0007181047088993358",
            "extra": "mean: 9.96234414583371 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 100.28988752659329,
            "unit": "iter/sec",
            "range": "stddev: 0.0007703086422673932",
            "extra": "mean: 9.97109503921655 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.090654099489914,
            "unit": "iter/sec",
            "range": "stddev: 0.0004220475567285148",
            "extra": "mean: 36.913099119996104 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2318.9130497545166,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798963302792634",
            "extra": "mean: 431.2365226914659 usec\nrounds: 1278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.949247792063595,
            "unit": "iter/sec",
            "range": "stddev: 0.00011430483230343924",
            "extra": "mean: 20.429323127660716 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2523439.429694136,
            "unit": "iter/sec",
            "range": "stddev: 1.660346920963946e-8",
            "extra": "mean: 396.28452667924586 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 277.20288709516603,
            "unit": "iter/sec",
            "range": "stddev: 0.00026568753661569884",
            "extra": "mean: 3.607466035000897 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.85257453997664,
            "unit": "iter/sec",
            "range": "stddev: 0.0000517161668389825",
            "extra": "mean: 6.335024961830744 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.79447234838534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007941128283701689",
            "extra": "mean: 10.549138311829353 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1779.5589764850774,
            "unit": "iter/sec",
            "range": "stddev: 0.000004509501865548109",
            "extra": "mean: 561.9369816982211 usec\nrounds: 1366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9656.677662731234,
            "unit": "iter/sec",
            "range": "stddev: 0.000001976400313268994",
            "extra": "mean: 103.55528422154731 usec\nrounds: 4785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 97.28752605373191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866218719633945",
            "extra": "mean: 10.278810044441872 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.3163932307399,
            "unit": "iter/sec",
            "range": "stddev: 0.0001365790917718559",
            "extra": "mean: 8.52395792660607 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2526229.0967414686,
            "unit": "iter/sec",
            "range": "stddev: 1.646116915747978e-8",
            "extra": "mean: 395.8469171659905 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.47736656264257,
            "unit": "iter/sec",
            "range": "stddev: 0.00005701189076567576",
            "extra": "mean: 6.079863879746285 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 303.44743154055107,
            "unit": "iter/sec",
            "range": "stddev: 0.00004173885063260343",
            "extra": "mean: 3.295463714829187 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 281.8459793244709,
            "unit": "iter/sec",
            "range": "stddev: 0.00023609928587252203",
            "extra": "mean: 3.54803713147444 msec\nrounds: 251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12715139.379241908,
            "unit": "iter/sec",
            "range": "stddev: 3.6166881030993685e-9",
            "extra": "mean: 78.64640490151635 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 100.32184479032126,
            "unit": "iter/sec",
            "range": "stddev: 0.00023593845222046622",
            "extra": "mean: 9.967918772726524 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.11610919533798,
            "unit": "iter/sec",
            "range": "stddev: 0.015898386153943893",
            "extra": "mean: 10.625173613206853 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4710.882395967426,
            "unit": "iter/sec",
            "range": "stddev: 0.00002151660589929131",
            "extra": "mean: 212.2744564491808 usec\nrounds: 2101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7479729.103620419,
            "unit": "iter/sec",
            "range": "stddev: 4.469031626047299e-9",
            "extra": "mean: 133.69468147141447 nsec\nrounds: 74075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.940983720476714,
            "unit": "iter/sec",
            "range": "stddev: 0.00026884628230109314",
            "extra": "mean: 62.731385812499596 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7998953150764594,
            "unit": "iter/sec",
            "range": "stddev: 0.0027369683257307594",
            "extra": "mean: 1.2501635915999998 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}