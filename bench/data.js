window.BENCHMARK_DATA = {
  "lastUpdate": 1675556786591,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "8bf203c7e5326b7d07ccb0945197d3492df82a78",
          "message": "chore(flake/nixpkgs): `a59fe7ab` -> `b2d76c24`",
          "timestamp": "2023-02-05T00:20:37Z",
          "tree_id": "977c0b9e4af810dd5806dd33f076539690edf52c",
          "url": "https://github.com/ibis-project/ibis/commit/8bf203c7e5326b7d07ccb0945197d3492df82a78"
        },
        "date": 1675556719031,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.46712437126453,
            "unit": "iter/sec",
            "range": "stddev: 0.00010760603366063072",
            "extra": "mean: 6.155091399998149 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 102.78677854361838,
            "unit": "iter/sec",
            "range": "stddev: 0.0005478202267362309",
            "extra": "mean: 9.728877723078382 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 120.60915716132982,
            "unit": "iter/sec",
            "range": "stddev: 0.012159681465047532",
            "extra": "mean: 8.291244409098846 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 134109.19722054672,
            "unit": "iter/sec",
            "range": "stddev: 4.1096704287218823e-7",
            "extra": "mean: 7.456610141029098 usec\nrounds: 37452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.2194415554477,
            "unit": "iter/sec",
            "range": "stddev: 0.00020002052275432686",
            "extra": "mean: 3.6735069115051155 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12114.677156570539,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038874468178488915",
            "extra": "mean: 82.54450259598029 usec\nrounds: 3082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.48562161852595,
            "unit": "iter/sec",
            "range": "stddev: 0.00020698037961692457",
            "extra": "mean: 3.6299535130901788 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1072.0388171349432,
            "unit": "iter/sec",
            "range": "stddev: 0.00001473867749541179",
            "extra": "mean: 932.8020441205019 usec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5240660102627266,
            "unit": "iter/sec",
            "range": "stddev: 0.002291553162474678",
            "extra": "mean: 396.18615200000704 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 430886.75137203006,
            "unit": "iter/sec",
            "range": "stddev: 2.524797450498271e-7",
            "extra": "mean: 2.320795422035602 usec\nrounds: 2097"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 159.89601394826676,
            "unit": "iter/sec",
            "range": "stddev: 0.00010983283276380884",
            "extra": "mean: 6.254064596779399 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.87862702420256,
            "unit": "iter/sec",
            "range": "stddev: 0.00021493673418585612",
            "extra": "mean: 6.294112800003404 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.62518731840545,
            "unit": "iter/sec",
            "range": "stddev: 0.0001760092542595405",
            "extra": "mean: 13.961569071429583 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 248.62030663737303,
            "unit": "iter/sec",
            "range": "stddev: 0.008755198141026193",
            "extra": "mean: 4.022197597312746 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 303.7538628357627,
            "unit": "iter/sec",
            "range": "stddev: 0.000029796647383154555",
            "extra": "mean: 3.292139203315061 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7910641381037063,
            "unit": "iter/sec",
            "range": "stddev: 0.014851469817715676",
            "extra": "mean: 1.264120002200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7767084104366295,
            "unit": "iter/sec",
            "range": "stddev: 0.017435314388713128",
            "extra": "mean: 1.2874844491999853 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 104.32138914193584,
            "unit": "iter/sec",
            "range": "stddev: 0.0005846078496542405",
            "extra": "mean: 9.58576192500118 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.667734177748187,
            "unit": "iter/sec",
            "range": "stddev: 0.002446477003317159",
            "extra": "mean: 1.4976019400000156 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1633.1442056649184,
            "unit": "iter/sec",
            "range": "stddev: 0.000007823578665309264",
            "extra": "mean: 612.3157995058127 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4620.114170453459,
            "unit": "iter/sec",
            "range": "stddev: 0.000030484535436904966",
            "extra": "mean: 216.44486761716777 usec\nrounds: 1541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 100.8512512943653,
            "unit": "iter/sec",
            "range": "stddev: 0.00006173211794555608",
            "extra": "mean: 9.915593382983355 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.000344384292234,
            "unit": "iter/sec",
            "range": "stddev: 0.00044438635536356107",
            "extra": "mean: 17.24127693750077 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4960.587428746046,
            "unit": "iter/sec",
            "range": "stddev: 0.000047689993324810206",
            "extra": "mean: 201.58902838908 usec\nrounds: 317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.44760836661685,
            "unit": "iter/sec",
            "range": "stddev: 0.0003873807526479342",
            "extra": "mean: 11.84166158570942 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.250829151982,
            "unit": "iter/sec",
            "range": "stddev: 0.0006907208203633662",
            "extra": "mean: 10.17803115384525 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.279739513289348,
            "unit": "iter/sec",
            "range": "stddev: 0.00023516842162761892",
            "extra": "mean: 65.44614187501452 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4786.990244057612,
            "unit": "iter/sec",
            "range": "stddev: 0.00008825928128358216",
            "extra": "mean: 208.8995274726875 usec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4948334.800719893,
            "unit": "iter/sec",
            "range": "stddev: 1.3034362064372076e-8",
            "extra": "mean: 202.08818527288744 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6008.587281540658,
            "unit": "iter/sec",
            "range": "stddev: 0.000044334636691542356",
            "extra": "mean: 166.42847197579368 usec\nrounds: 2034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.34179397973159,
            "unit": "iter/sec",
            "range": "stddev: 0.023191982758019987",
            "extra": "mean: 27.51652823076693 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 460.29580216110526,
            "unit": "iter/sec",
            "range": "stddev: 0.000052043775574011734",
            "extra": "mean: 2.1725160110193578 msec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 10805.435413186397,
            "unit": "iter/sec",
            "range": "stddev: 0.000013924984707392184",
            "extra": "mean: 92.54601612625915 usec\nrounds: 5953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 577.1267374238041,
            "unit": "iter/sec",
            "range": "stddev: 0.00002902601017170684",
            "extra": "mean: 1.732721662600195 msec\nrounds: 492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1654941.23461203,
            "unit": "iter/sec",
            "range": "stddev: 9.903508154312595e-8",
            "extra": "mean: 604.2510628689672 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.32037534540878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789593914844684",
            "extra": "mean: 16.046116449997783 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12282.406414395247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016683115925704721",
            "extra": "mean: 81.41727005776151 usec\nrounds: 5721"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 294.47754245827997,
            "unit": "iter/sec",
            "range": "stddev: 0.00008910252433563788",
            "extra": "mean: 3.3958446937992726 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 78.01824429171448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008492721655756987",
            "extra": "mean: 12.81751478873256 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 279.291058704736,
            "unit": "iter/sec",
            "range": "stddev: 0.00018806080412525655",
            "extra": "mean: 3.580494143413274 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11517904.879976884,
            "unit": "iter/sec",
            "range": "stddev: 3.589617150672768e-9",
            "extra": "mean: 86.82134558505227 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8380579482901972,
            "unit": "iter/sec",
            "range": "stddev: 0.0033766708094176137",
            "extra": "mean: 1.193234909399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.8072579562247,
            "unit": "iter/sec",
            "range": "stddev: 0.0006783800768615639",
            "extra": "mean: 9.633237787878935 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5048034.963725939,
            "unit": "iter/sec",
            "range": "stddev: 6.778364895610262e-9",
            "extra": "mean: 198.09688466616677 nsec\nrounds: 54052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.091417683925144,
            "unit": "iter/sec",
            "range": "stddev: 0.0009313176468008171",
            "extra": "mean: 24.335981972975283 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.980456966307631,
            "unit": "iter/sec",
            "range": "stddev: 0.04661062008734292",
            "extra": "mean: 111.35290818181561 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.20371361169535,
            "unit": "iter/sec",
            "range": "stddev: 0.0002362622959688491",
            "extra": "mean: 9.596586967393497 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 65896.28840884446,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015427758407168553",
            "extra": "mean: 15.175361528643885 usec\nrounds: 14104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5409.928817694183,
            "unit": "iter/sec",
            "range": "stddev: 0.000043503205456396376",
            "extra": "mean: 184.84531565911055 usec\nrounds: 2018"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.2505780135564,
            "unit": "iter/sec",
            "range": "stddev: 0.000049185213566624215",
            "extra": "mean: 7.285943815123524 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14063411623742067,
            "unit": "iter/sec",
            "range": "stddev: 0.08606716107937108",
            "extra": "mean: 7.110650151999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5976.0862565623065,
            "unit": "iter/sec",
            "range": "stddev: 0.000044274557364092356",
            "extra": "mean: 167.3335954449964 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 97.20001669147673,
            "unit": "iter/sec",
            "range": "stddev: 0.000648737385342916",
            "extra": "mean: 10.288064076924051 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 696.8999201095033,
            "unit": "iter/sec",
            "range": "stddev: 0.000015464662428368706",
            "extra": "mean: 1.4349262658013662 msec\nrounds: 617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1923816.720928317,
            "unit": "iter/sec",
            "range": "stddev: 9.383226020239538e-8",
            "extra": "mean: 519.8000355862698 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6085622.071495989,
            "unit": "iter/sec",
            "range": "stddev: 4.778508405951742e-9",
            "extra": "mean: 164.32173872311853 nsec\nrounds: 57801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.00012936881648,
            "unit": "iter/sec",
            "range": "stddev: 0.0007094545887930253",
            "extra": "mean: 25.640940586201616 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1694985.6147471059,
            "unit": "iter/sec",
            "range": "stddev: 8.661442040245791e-8",
            "extra": "mean: 589.9755085232397 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1703793.6891570964,
            "unit": "iter/sec",
            "range": "stddev: 2.0006862497883784e-7",
            "extra": "mean: 586.9255217717831 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 171.00440753605523,
            "unit": "iter/sec",
            "range": "stddev: 0.000689129033354674",
            "extra": "mean: 5.847802488887055 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.11845376444534,
            "unit": "iter/sec",
            "range": "stddev: 0.0010297802985593926",
            "extra": "mean: 38.28710570000453 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 239.07437507174058,
            "unit": "iter/sec",
            "range": "stddev: 0.00048053739406334983",
            "extra": "mean: 4.182798761682107 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 268.9343412019242,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680158549085168",
            "extra": "mean: 3.7183797187476664 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5559.597222246324,
            "unit": "iter/sec",
            "range": "stddev: 0.00005077935036932245",
            "extra": "mean: 179.8691451960895 usec\nrounds: 2321"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.59548788002256,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712764716915701",
            "extra": "mean: 11.16127635064727 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7498281041489079,
            "unit": "iter/sec",
            "range": "stddev: 0.0014157202539659354",
            "extra": "mean: 571.4847061999762 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.71767187301224,
            "unit": "iter/sec",
            "range": "stddev: 0.0007173107009254199",
            "extra": "mean: 26.51277107894669 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 21671.93420266124,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072029228160919",
            "extra": "mean: 46.142628094413624 usec\nrounds: 5453"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 260.55817666240586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002132603969319178",
            "extra": "mean: 3.8379144834731385 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 114.44375895756048,
            "unit": "iter/sec",
            "range": "stddev: 0.0001445077740463753",
            "extra": "mean: 8.737916415091128 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.52432333047526,
            "unit": "iter/sec",
            "range": "stddev: 0.015101707803375733",
            "extra": "mean: 7.3787492564084305 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 174.87146846555314,
            "unit": "iter/sec",
            "range": "stddev: 0.000743747151570561",
            "extra": "mean: 5.718485747130235 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 171.01126254991934,
            "unit": "iter/sec",
            "range": "stddev: 0.0007748976563432535",
            "extra": "mean: 5.8475680787871696 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 170.52819933100392,
            "unit": "iter/sec",
            "range": "stddev: 0.0008094301680237711",
            "extra": "mean: 5.864132758822774 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 670509.1183549679,
            "unit": "iter/sec",
            "range": "stddev: 3.9145133115084554e-7",
            "extra": "mean: 1.4914040281113663 usec\nrounds: 20704"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5868.742308554874,
            "unit": "iter/sec",
            "range": "stddev: 0.00007544848201507018",
            "extra": "mean: 170.39425952342438 usec\nrounds: 2389"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.2563607716842,
            "unit": "iter/sec",
            "range": "stddev: 0.00004205501969207359",
            "extra": "mean: 5.095376252101989 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 171.91743943176806,
            "unit": "iter/sec",
            "range": "stddev: 0.000709958272915717",
            "extra": "mean: 5.816745545450541 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 298.12402352080795,
            "unit": "iter/sec",
            "range": "stddev: 0.00001665322746711562",
            "extra": "mean: 3.354308680629368 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 273.3562222745971,
            "unit": "iter/sec",
            "range": "stddev: 0.00019557736667014114",
            "extra": "mean: 3.6582302450589936 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.606000984116383,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758880312334315",
            "extra": "mean: 178.38027550000865 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.52710717965931,
            "unit": "iter/sec",
            "range": "stddev: 0.0007021307094786902",
            "extra": "mean: 10.253559537635548 msec\nrounds: 93"
          }
        ]
      }
    ]
  }
}