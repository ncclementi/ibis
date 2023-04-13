window.BENCHMARK_DATA = {
  "lastUpdate": 1681405450038,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "56b56b363cea406df67d807a2c2067bb71c226ab",
          "message": "fix(backends): fix notall/notany translation",
          "timestamp": "2023-04-13T16:55:19Z",
          "tree_id": "8db80d33a7d2e3f9fe015e76ed7840970af357ff",
          "url": "https://github.com/ibis-project/ibis/commit/56b56b363cea406df67d807a2c2067bb71c226ab"
        },
        "date": 1681405371759,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1255.9727939387262,
            "unit": "iter/sec",
            "range": "stddev: 0.0048120423750615485",
            "extra": "mean: 796.1955902436418 usec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1892226.0859207907,
            "unit": "iter/sec",
            "range": "stddev: 1.0223287975169242e-7",
            "extra": "mean: 528.478075342346 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.0729754419408,
            "unit": "iter/sec",
            "range": "stddev: 0.00004641329761268577",
            "extra": "mean: 1.8346167303363519 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 748.0395388892824,
            "unit": "iter/sec",
            "range": "stddev: 0.000033066052275981576",
            "extra": "mean: 1.3368277317063186 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 90.26384983725468,
            "unit": "iter/sec",
            "range": "stddev: 0.01046921650974857",
            "extra": "mean: 11.078632274193883 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2096.6481943851795,
            "unit": "iter/sec",
            "range": "stddev: 0.00012881172310822404",
            "extra": "mean: 476.95173786331844 usec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.97934762257867,
            "unit": "iter/sec",
            "range": "stddev: 0.0006417873756198443",
            "extra": "mean: 11.113661372546652 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12218.826324575382,
            "unit": "iter/sec",
            "range": "stddev: 0.000016203225315978413",
            "extra": "mean: 81.8409210047227 usec\nrounds: 3861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.98093256325329,
            "unit": "iter/sec",
            "range": "stddev: 0.00006646909178578888",
            "extra": "mean: 13.161196714287641 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.7532739420944,
            "unit": "iter/sec",
            "range": "stddev: 0.0007207160746748734",
            "extra": "mean: 18.26374804651085 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.95823254343352,
            "unit": "iter/sec",
            "range": "stddev: 0.0008113503243066362",
            "extra": "mean: 10.004178490906021 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.41372093587907,
            "unit": "iter/sec",
            "range": "stddev: 0.0007730272842873781",
            "extra": "mean: 9.95879836619706 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.046493105996218,
            "unit": "iter/sec",
            "range": "stddev: 0.03636844190012982",
            "extra": "mean: 99.53722054546108 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.69059069400534,
            "unit": "iter/sec",
            "range": "stddev: 0.00020764119398603055",
            "extra": "mean: 12.871571590163759 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2215.67140095426,
            "unit": "iter/sec",
            "range": "stddev: 0.00007946876913464605",
            "extra": "mean: 451.3304633391546 usec\nrounds: 1282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2101.837003514106,
            "unit": "iter/sec",
            "range": "stddev: 0.00009404122078327315",
            "extra": "mean: 475.7742861735133 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.947078142798172,
            "unit": "iter/sec",
            "range": "stddev: 0.01717756198477774",
            "extra": "mean: 1.0558790820000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1956228.2371102052,
            "unit": "iter/sec",
            "range": "stddev: 7.985551759424738e-8",
            "extra": "mean: 511.1877954881317 nsec\nrounds: 129854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9103733742214,
            "unit": "iter/sec",
            "range": "stddev: 0.00002240780589712491",
            "extra": "mean: 5.183754416669591 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 234.0829773853615,
            "unit": "iter/sec",
            "range": "stddev: 0.003963309041437135",
            "extra": "mean: 4.271989408071052 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.76438523711897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007562672677754629",
            "extra": "mean: 9.924141328772043 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.95374483743365,
            "unit": "iter/sec",
            "range": "stddev: 0.0006236167466443666",
            "extra": "mean: 9.808369487501523 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.172723126953921,
            "unit": "iter/sec",
            "range": "stddev: 0.05938322257031486",
            "extra": "mean: 5.789612645600028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.1674443208638,
            "unit": "iter/sec",
            "range": "stddev: 0.00039971723770857793",
            "extra": "mean: 3.7429710140843953 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.50432059723143,
            "unit": "iter/sec",
            "range": "stddev: 0.00017554418647342643",
            "extra": "mean: 11.172645000010561 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.5844213819918,
            "unit": "iter/sec",
            "range": "stddev: 0.00003707923951953377",
            "extra": "mean: 3.3491365536471087 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 96.99417915917518,
            "unit": "iter/sec",
            "range": "stddev: 0.0007165014314322451",
            "extra": "mean: 10.309897033706736 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 681.4540607413726,
            "unit": "iter/sec",
            "range": "stddev: 0.00009547604146876885",
            "extra": "mean: 1.4674503500823997 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1170.7045723876824,
            "unit": "iter/sec",
            "range": "stddev: 0.000014479765134968585",
            "extra": "mean: 854.1864647888698 usec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.6328297253723,
            "unit": "iter/sec",
            "range": "stddev: 0.0010244056107492968",
            "extra": "mean: 17.351221599999967 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 281.9930800832497,
            "unit": "iter/sec",
            "range": "stddev: 0.00026004631284400043",
            "extra": "mean: 3.546186309624268 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1576911.3120604267,
            "unit": "iter/sec",
            "range": "stddev: 2.9957328912756517e-7",
            "extra": "mean: 634.151072639195 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 487320.6655591579,
            "unit": "iter/sec",
            "range": "stddev: 4.152920013077032e-7",
            "extra": "mean: 2.0520369249118287 usec\nrounds: 1977"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.07999391058547,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298263710087455",
            "extra": "mean: 10.300783505621556 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 737417.4083533469,
            "unit": "iter/sec",
            "range": "stddev: 1.7869672147154864e-7",
            "extra": "mean: 1.3560840694458247 usec\nrounds: 26954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 165.32602685802854,
            "unit": "iter/sec",
            "range": "stddev: 0.00011765433443096335",
            "extra": "mean: 6.048654401274255 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10172.878806157858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018309478753718376",
            "extra": "mean: 98.3005911163199 usec\nrounds: 4615"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.98626675553582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475916875729207",
            "extra": "mean: 10.418157032264482 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 290.9997322381708,
            "unit": "iter/sec",
            "range": "stddev: 0.00003881197849289009",
            "extra": "mean: 3.436429278847387 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5591009.190610309,
            "unit": "iter/sec",
            "range": "stddev: 1.89630270718876e-8",
            "extra": "mean: 178.85858633178802 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.26534827311489,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960021926663328",
            "extra": "mean: 20.718797973680573 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.46712119502762,
            "unit": "iter/sec",
            "range": "stddev: 0.0007534528679862536",
            "extra": "mean: 9.95350506817839 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4484.15544546027,
            "unit": "iter/sec",
            "range": "stddev: 0.00005835079586868628",
            "extra": "mean: 223.00743410052686 usec\nrounds: 956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6171278.262486406,
            "unit": "iter/sec",
            "range": "stddev: 7.509687048697104e-9",
            "extra": "mean: 162.04098364476656 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 256.0977236630572,
            "unit": "iter/sec",
            "range": "stddev: 0.00040634646137679937",
            "extra": "mean: 3.904759424241039 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 42.75822137443374,
            "unit": "iter/sec",
            "range": "stddev: 0.000827758575586202",
            "extra": "mean: 23.387315184207505 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.32448139739422,
            "unit": "iter/sec",
            "range": "stddev: 0.0008448892618667324",
            "extra": "mean: 10.490484556964354 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7155792.382274047,
            "unit": "iter/sec",
            "range": "stddev: 3.968195850836258e-9",
            "extra": "mean: 139.7469276047328 nsec\nrounds: 60972"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.18007882915333,
            "unit": "iter/sec",
            "range": "stddev: 0.00010393585559750218",
            "extra": "mean: 9.982024487177691 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.47471050804258,
            "unit": "iter/sec",
            "range": "stddev: 0.000920492385026372",
            "extra": "mean: 10.584843230769895 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.51265085235985,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836986111903269",
            "extra": "mean: 3.69668478294488 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140554.75959052454,
            "unit": "iter/sec",
            "range": "stddev: 3.70690777322717e-7",
            "extra": "mean: 7.1146647962209215 usec\nrounds: 3920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 74008.16977875947,
            "unit": "iter/sec",
            "range": "stddev: 3.9265395745237374e-7",
            "extra": "mean: 13.512021753671343 usec\nrounds: 13423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.731520205225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012855847825235235",
            "extra": "mean: 6.183086628574789 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.4107906895859,
            "unit": "iter/sec",
            "range": "stddev: 0.0000716687080628136",
            "extra": "mean: 6.312701272728014 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.7092664416692667,
            "unit": "iter/sec",
            "range": "stddev: 0.003488023431420949",
            "extra": "mean: 1.4099073933999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8169304862632372,
            "unit": "iter/sec",
            "range": "stddev: 0.0010866960047445974",
            "extra": "mean: 550.3787886000168 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.50701438108695,
            "unit": "iter/sec",
            "range": "stddev: 0.0006633799062856807",
            "extra": "mean: 10.15156135106656 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.602808354524659,
            "unit": "iter/sec",
            "range": "stddev: 0.0013229113150037151",
            "extra": "mean: 384.2003958000305 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.17600045064944,
            "unit": "iter/sec",
            "range": "stddev: 0.0008624035715021486",
            "extra": "mean: 10.083084571429213 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 43.803476302554174,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161971760911293",
            "extra": "mean: 22.829238325582168 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 280.6123395645035,
            "unit": "iter/sec",
            "range": "stddev: 0.0002840066373296924",
            "extra": "mean: 3.5636351614185986 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.74400523601307,
            "unit": "iter/sec",
            "range": "stddev: 0.00009851219180901134",
            "extra": "mean: 8.949025926607096 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 285.63513246525787,
            "unit": "iter/sec",
            "range": "stddev: 0.00025268865250629925",
            "extra": "mean: 3.500969895997059 msec\nrounds: 250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2709735.193712558,
            "unit": "iter/sec",
            "range": "stddev: 1.765497436261104e-8",
            "extra": "mean: 369.03975057062956 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 121.64170645332418,
            "unit": "iter/sec",
            "range": "stddev: 0.00005256114454344966",
            "extra": "mean: 8.220864612613072 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.14061206818917,
            "unit": "iter/sec",
            "range": "stddev: 0.0007644751466781141",
            "extra": "mean: 10.40143159574161 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8481.73862893257,
            "unit": "iter/sec",
            "range": "stddev: 0.00001673742291064712",
            "extra": "mean: 117.90035554607164 usec\nrounds: 4607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.19517174057405,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210035975979918",
            "extra": "mean: 9.980520843750895 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.12987404233506,
            "unit": "iter/sec",
            "range": "stddev: 0.0008002139659920621",
            "extra": "mean: 39.79327545833892 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.786265680049303,
            "unit": "iter/sec",
            "range": "stddev: 0.0001872941476947376",
            "extra": "mean: 172.82303566667187 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 285.0803433912188,
            "unit": "iter/sec",
            "range": "stddev: 0.0002582213154391199",
            "extra": "mean: 3.507783062502101 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11170228.602315748,
            "unit": "iter/sec",
            "range": "stddev: 2.8618563207234315e-9",
            "extra": "mean: 89.52368260333796 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2170.6741826005054,
            "unit": "iter/sec",
            "range": "stddev: 0.0001167890580999609",
            "extra": "mean: 460.68636556131264 usec\nrounds: 1417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9427623521430356,
            "unit": "iter/sec",
            "range": "stddev: 0.007166137157258053",
            "extra": "mean: 1.0607127000000105 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1642.8695334548172,
            "unit": "iter/sec",
            "range": "stddev: 0.00525991968723462",
            "extra": "mean: 608.6910613632743 usec\nrounds: 1320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1804.9507792037018,
            "unit": "iter/sec",
            "range": "stddev: 0.000008475030012874787",
            "extra": "mean: 554.0317284669527 usec\nrounds: 1370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.31417720531068,
            "unit": "iter/sec",
            "range": "stddev: 0.0008858048256920993",
            "extra": "mean: 24.204766200002073 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 164.82134015909338,
            "unit": "iter/sec",
            "range": "stddev: 0.004050366769622539",
            "extra": "mean: 6.067175518866383 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 14181.411733357741,
            "unit": "iter/sec",
            "range": "stddev: 0.000003067790771926954",
            "extra": "mean: 70.51484145600148 usec\nrounds: 6566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2163.7908977086026,
            "unit": "iter/sec",
            "range": "stddev: 0.00008393921507260992",
            "extra": "mean: 462.1518655332979 usec\nrounds: 1294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.797610789286846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010355556952911147",
            "extra": "mean: 63.300711312507474 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2193.706938534758,
            "unit": "iter/sec",
            "range": "stddev: 0.00008157786898276351",
            "extra": "mean: 455.8494037804017 usec\nrounds: 1429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 109.54871276318289,
            "unit": "iter/sec",
            "range": "stddev: 0.00004208695056142951",
            "extra": "mean: 9.128359200000384 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8648276090264199,
            "unit": "iter/sec",
            "range": "stddev: 0.0031178355875335117",
            "extra": "mean: 1.156299809999996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 242.61727846177214,
            "unit": "iter/sec",
            "range": "stddev: 0.010219690648640943",
            "extra": "mean: 4.121717984556341 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.0393036144133,
            "unit": "iter/sec",
            "range": "stddev: 0.0007627796316076303",
            "extra": "mean: 10.097001528739233 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 132.31553002896902,
            "unit": "iter/sec",
            "range": "stddev: 0.00006197072355139448",
            "extra": "mean: 7.557691827868286 msec\nrounds: 122"
          }
        ]
      }
    ]
  }
}