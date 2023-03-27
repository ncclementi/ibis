window.BENCHMARK_DATA = {
  "lastUpdate": 1679914148977,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "togurg14@freeuni.edu.ge",
            "name": "tokoko",
            "username": "tokoko"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bfd61093feb7da46edf56ba9d4b9dbc151700629",
          "message": "feat(pyspark): add DateDiff operation",
          "timestamp": "2023-03-27T06:42:33-04:00",
          "tree_id": "fdcc4bddc545fa9a16ebbb6c4d54c995d7a84229",
          "url": "https://github.com/ibis-project/ibis/commit/bfd61093feb7da46edf56ba9d4b9dbc151700629"
        },
        "date": 1679914070474,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 317.3831779266982,
            "unit": "iter/sec",
            "range": "stddev: 0.00019616631079085253",
            "extra": "mean: 3.1507656030558646 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 139.3599562612835,
            "unit": "iter/sec",
            "range": "stddev: 0.00007597836162398935",
            "extra": "mean: 7.175662412846327 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8619568203279058,
            "unit": "iter/sec",
            "range": "stddev: 0.004479547798007721",
            "extra": "mean: 1.1601509222000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6952035.199964098,
            "unit": "iter/sec",
            "range": "stddev: 4.204630670702413e-9",
            "extra": "mean: 143.84276995680398 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 245.13083435673215,
            "unit": "iter/sec",
            "range": "stddev: 0.0071658915368737865",
            "extra": "mean: 4.079454152000835 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 702.4180433196393,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942417613650641",
            "extra": "mean: 1.4236536340581223 msec\nrounds: 552"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 144958.2034356469,
            "unit": "iter/sec",
            "range": "stddev: 5.15710176951088e-7",
            "extra": "mean: 6.8985402433187755 usec\nrounds: 31645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16662282318653887,
            "unit": "iter/sec",
            "range": "stddev: 0.10168341577583953",
            "extra": "mean: 6.001578780600016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.37566683610783,
            "unit": "iter/sec",
            "range": "stddev: 0.0005522832998247154",
            "extra": "mean: 8.743118424244281 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1839722.4227172579,
            "unit": "iter/sec",
            "range": "stddev: 9.015747403741656e-8",
            "extra": "mean: 543.560260858813 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.126626320361275,
            "unit": "iter/sec",
            "range": "stddev: 0.017438659983184262",
            "extra": "mean: 25.55804305263103 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 793522.9445754471,
            "unit": "iter/sec",
            "range": "stddev: 2.7501351688198356e-7",
            "extra": "mean: 1.2602030058942062 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.586190435682342,
            "unit": "iter/sec",
            "range": "stddev: 0.00046674464885387097",
            "extra": "mean: 94.46268760000294 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 500274.8291424524,
            "unit": "iter/sec",
            "range": "stddev: 3.5446845287918925e-7",
            "extra": "mean: 1.998901287346703 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6760349267566074,
            "unit": "iter/sec",
            "range": "stddev: 0.06493380557166602",
            "extra": "mean: 1.4792135146000078 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 264.561293827737,
            "unit": "iter/sec",
            "range": "stddev: 0.007104174824423506",
            "extra": "mean: 3.779842415841552 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 107.04151980931891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005413464705188922",
            "extra": "mean: 9.342169298244036 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5653.604368174697,
            "unit": "iter/sec",
            "range": "stddev: 0.000051720351241345226",
            "extra": "mean: 176.87831246721223 usec\nrounds: 3882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1699101.993694031,
            "unit": "iter/sec",
            "range": "stddev: 9.708416093886728e-8",
            "extra": "mean: 588.5461871690776 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.15843708327964,
            "unit": "iter/sec",
            "range": "stddev: 0.000335014457455355",
            "extra": "mean: 3.519163499998155 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.1571901035913,
            "unit": "iter/sec",
            "range": "stddev: 0.000019930857515835264",
            "extra": "mean: 1.8276283636347237 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.826167465585782,
            "unit": "iter/sec",
            "range": "stddev: 0.0033198077616668816",
            "extra": "mean: 1.2104083513999968 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4106.076250449005,
            "unit": "iter/sec",
            "range": "stddev: 0.0028459453052554194",
            "extra": "mean: 243.5415075135657 usec\nrounds: 1730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 314.2087499374385,
            "unit": "iter/sec",
            "range": "stddev: 0.00018638772821741052",
            "extra": "mean: 3.182597557194407 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7293688017485376,
            "unit": "iter/sec",
            "range": "stddev: 0.0013345306839481687",
            "extra": "mean: 578.2456575999959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8519123224248464,
            "unit": "iter/sec",
            "range": "stddev: 0.004634571501420821",
            "extra": "mean: 1.1738297165999938 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.1910073130861,
            "unit": "iter/sec",
            "range": "stddev: 0.016136123632820985",
            "extra": "mean: 9.980935682931182 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1908907.2510143437,
            "unit": "iter/sec",
            "range": "stddev: 8.729065034251432e-7",
            "extra": "mean: 523.8599201027845 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1776.4909928469917,
            "unit": "iter/sec",
            "range": "stddev: 0.00012420674729549236",
            "extra": "mean: 562.9074417075468 usec\nrounds: 1218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 320.42957450760315,
            "unit": "iter/sec",
            "range": "stddev: 0.00019444514987756613",
            "extra": "mean: 3.120810560438053 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.56731871778952,
            "unit": "iter/sec",
            "range": "stddev: 0.0007018473053266196",
            "extra": "mean: 8.294121579834483 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5563795.555353952,
            "unit": "iter/sec",
            "range": "stddev: 1.0877438095545996e-8",
            "extra": "mean: 179.73341939895582 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.66413452834119,
            "unit": "iter/sec",
            "range": "stddev: 0.0005746371631337668",
            "extra": "mean: 16.484204510208876 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5545.693894726888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000904759565982687",
            "extra": "mean: 180.32008599516246 usec\nrounds: 2035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11798923.74000991,
            "unit": "iter/sec",
            "range": "stddev: 3.3620435118728075e-9",
            "extra": "mean: 84.75349294857263 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8463.557916589436,
            "unit": "iter/sec",
            "range": "stddev: 0.00004494724511371975",
            "extra": "mean: 118.15361929997525 usec\nrounds: 3026"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 228.66613173121047,
            "unit": "iter/sec",
            "range": "stddev: 0.004053241421809632",
            "extra": "mean: 4.373188073061327 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.21796245449124,
            "unit": "iter/sec",
            "range": "stddev: 0.0006255206500434064",
            "extra": "mean: 9.240610129030369 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.56798934253601,
            "unit": "iter/sec",
            "range": "stddev: 0.00034142380458608606",
            "extra": "mean: 17.370764750005208 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12373.605737980197,
            "unit": "iter/sec",
            "range": "stddev: 0.00000436249961518644",
            "extra": "mean: 80.81718628956693 usec\nrounds: 5368"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 158.58416957108832,
            "unit": "iter/sec",
            "range": "stddev: 0.0041192639803516165",
            "extra": "mean: 6.305799643839805 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.154494948810395,
            "unit": "iter/sec",
            "range": "stddev: 0.000762483674865428",
            "extra": "mean: 23.72226262500199 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.8782668686631,
            "unit": "iter/sec",
            "range": "stddev: 0.00021678880796925166",
            "extra": "mean: 3.3125935509463678 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.13794677550317,
            "unit": "iter/sec",
            "range": "stddev: 0.0001024968605198229",
            "extra": "mean: 6.16758766153986 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5281.15953158201,
            "unit": "iter/sec",
            "range": "stddev: 0.00005273245768771512",
            "extra": "mean: 189.35235605360378 usec\nrounds: 2230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.45752041415936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002460460229149318",
            "extra": "mean: 11.054912796874206 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 336.3901795116752,
            "unit": "iter/sec",
            "range": "stddev: 0.000014652041358082237",
            "extra": "mean: 2.9727383880577665 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.18219491892918,
            "unit": "iter/sec",
            "range": "stddev: 0.00006319064105527178",
            "extra": "mean: 10.39693470130192 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.0119548015646,
            "unit": "iter/sec",
            "range": "stddev: 0.00012983713862636508",
            "extra": "mean: 6.060166981250248 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.717315452843998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006549775938995396",
            "extra": "mean: 38.88430741667529 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13827.344257748999,
            "unit": "iter/sec",
            "range": "stddev: 0.000001880181352976596",
            "extra": "mean: 72.32046742740124 usec\nrounds: 5787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.22080962178127,
            "unit": "iter/sec",
            "range": "stddev: 0.0005852306938521712",
            "extra": "mean: 8.249408687502426 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5014833959134117,
            "unit": "iter/sec",
            "range": "stddev: 0.0032841451343881755",
            "extra": "mean: 399.7627974000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.2830725748809,
            "unit": "iter/sec",
            "range": "stddev: 0.0004459439767196952",
            "extra": "mean: 21.606171422221603 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 120.81991105443949,
            "unit": "iter/sec",
            "range": "stddev: 0.0006436625985686369",
            "extra": "mean: 8.276781461537546 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 316.19573665758196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001900978795006957",
            "extra": "mean: 3.1625979862053946 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.92439985603622,
            "unit": "iter/sec",
            "range": "stddev: 0.000033291476643704944",
            "extra": "mean: 5.027035399999754 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 87.18123183801113,
            "unit": "iter/sec",
            "range": "stddev: 0.017141071652680657",
            "extra": "mean: 11.470358687499052 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.86634357435508,
            "unit": "iter/sec",
            "range": "stddev: 0.0008008173644726398",
            "extra": "mean: 10.768163809521932 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.923747346835,
            "unit": "iter/sec",
            "range": "stddev: 0.000014158595265849019",
            "extra": "mean: 1.3211370412213839 msec\nrounds: 655"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1167.3363795354148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006280561439672987",
            "extra": "mean: 856.6511054833976 usec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.12693556205458,
            "unit": "iter/sec",
            "range": "stddev: 0.0006798513033660226",
            "extra": "mean: 8.255802025864757 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.80545399982192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561455533537187",
            "extra": "mean: 13.368009236363708 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6104265.236623334,
            "unit": "iter/sec",
            "range": "stddev: 8.332598209980457e-9",
            "extra": "mean: 163.81988023706148 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73307.74308960821,
            "unit": "iter/sec",
            "range": "stddev: 5.383219447298782e-7",
            "extra": "mean: 13.6411238138602 usec\nrounds: 12438"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11940.268586791135,
            "unit": "iter/sec",
            "range": "stddev: 0.00005484119260197675",
            "extra": "mean: 83.7502098659862 usec\nrounds: 3669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5468.896740950708,
            "unit": "iter/sec",
            "range": "stddev: 0.000022934568030548492",
            "extra": "mean: 182.85223645055711 usec\nrounds: 1476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.98212817370592,
            "unit": "iter/sec",
            "range": "stddev: 0.00011218201166342467",
            "extra": "mean: 15.388846566041456 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.635911762928835,
            "unit": "iter/sec",
            "range": "stddev: 0.030379345393314505",
            "extra": "mean: 27.295622024395215 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 108.28246230481265,
            "unit": "iter/sec",
            "range": "stddev: 0.0006295127526987267",
            "extra": "mean: 9.235105839993025 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.29887852598972,
            "unit": "iter/sec",
            "range": "stddev: 0.0007023523529903408",
            "extra": "mean: 8.38230847058756 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.601297833404239,
            "unit": "iter/sec",
            "range": "stddev: 0.00012316192491319076",
            "extra": "mean: 178.5300531666678 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5324.387933557258,
            "unit": "iter/sec",
            "range": "stddev: 0.000052788647894720956",
            "extra": "mean: 187.81501507383467 usec\nrounds: 2322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.97809653342736,
            "unit": "iter/sec",
            "range": "stddev: 0.00020582029081235825",
            "extra": "mean: 9.903137752937978 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.20463535471629,
            "unit": "iter/sec",
            "range": "stddev: 0.00022057081897507464",
            "extra": "mean: 9.074028481481692 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5168.809925489419,
            "unit": "iter/sec",
            "range": "stddev: 0.000049592419583726184",
            "extra": "mean: 193.4681318166895 usec\nrounds: 2329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5232.9147150912,
            "unit": "iter/sec",
            "range": "stddev: 0.00005117722159756215",
            "extra": "mean: 191.09808862661194 usec\nrounds: 2629"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.80885534949373,
            "unit": "iter/sec",
            "range": "stddev: 0.0007988174588395228",
            "extra": "mean: 9.451004801979316 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5189.18478659451,
            "unit": "iter/sec",
            "range": "stddev: 0.00005076118075144688",
            "extra": "mean: 192.70849683043699 usec\nrounds: 3156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.96484692996104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007468718209395994",
            "extra": "mean: 9.80730153684135 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.38731547720354,
            "unit": "iter/sec",
            "range": "stddev: 0.00008915712875842898",
            "extra": "mean: 6.313636903227447 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.72450120628082,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586024465069029",
            "extra": "mean: 8.871185849561176 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1827037.8452361573,
            "unit": "iter/sec",
            "range": "stddev: 1.383319739298823e-7",
            "extra": "mean: 547.3340372272053 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 316.9489021649891,
            "unit": "iter/sec",
            "range": "stddev: 0.0002445352829283888",
            "extra": "mean: 3.1550827062951803 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.96452549927989,
            "unit": "iter/sec",
            "range": "stddev: 0.00013269794784066973",
            "extra": "mean: 8.335797568807145 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.02301876452783,
            "unit": "iter/sec",
            "range": "stddev: 0.0007592896054658552",
            "extra": "mean: 9.898734092780145 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 286.205920314545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000686302022432943",
            "extra": "mean: 3.493987821429353 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.750213508319478,
            "unit": "iter/sec",
            "range": "stddev: 0.00013872970065015945",
            "extra": "mean: 63.49120279999927 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}