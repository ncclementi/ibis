window.BENCHMARK_DATA = {
  "lastUpdate": 1677698304408,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "omrif@diagnosticrobotics.com",
            "name": "Omri Fima",
            "username": "thegreymatter"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "466cf35a5975c41c365308e4135163cd19c206b8",
          "message": "feat(sql): support for creating temporary tables in sql based backends",
          "timestamp": "2023-03-01T14:10:22-05:00",
          "tree_id": "af92ae96b6b93dc6562c781d9e08c6a7bfbe99ac",
          "url": "https://github.com/ibis-project/ibis/commit/466cf35a5975c41c365308e4135163cd19c206b8"
        },
        "date": 1677698216823,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 286.5869965200232,
            "unit": "iter/sec",
            "range": "stddev: 0.00390662114949768",
            "extra": "mean: 3.4893418478257163 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11680.463705435783,
            "unit": "iter/sec",
            "range": "stddev: 0.00001567356275194753",
            "extra": "mean: 85.61303944933506 usec\nrounds: 4867"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.93880110896619,
            "unit": "iter/sec",
            "range": "stddev: 0.0004846322184538012",
            "extra": "mean: 9.179465808511594 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.72502625825246,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233646567246586",
            "extra": "mean: 7.00647970588255 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13310.035517301587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027815895575771245",
            "extra": "mean: 75.13127960478465 usec\nrounds: 6173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.501619330272872,
            "unit": "iter/sec",
            "range": "stddev: 0.00038743747623643844",
            "extra": "mean: 95.22340969999874 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.60157088268445,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505795092901331",
            "extra": "mean: 36.229821999998535 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 141.5277153893996,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597234136050414",
            "extra": "mean: 7.065753850746466 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.09940920517596,
            "unit": "iter/sec",
            "range": "stddev: 0.0005788108274468625",
            "extra": "mean: 7.087201892857514 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70513.27357186859,
            "unit": "iter/sec",
            "range": "stddev: 0.000017444648622306796",
            "extra": "mean: 14.18172706137064 usec\nrounds: 12904"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.8047648282711,
            "unit": "iter/sec",
            "range": "stddev: 0.00019382442123992632",
            "extra": "mean: 3.3134003055551706 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.205148075533245,
            "unit": "iter/sec",
            "range": "stddev: 0.00020977062801308126",
            "extra": "mean: 20.74467230000181 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.44424984312897,
            "unit": "iter/sec",
            "range": "stddev: 0.00005890012457594214",
            "extra": "mean: 7.438027295081872 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.604175572445225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089819733186981",
            "extra": "mean: 64.08541068749952 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5513.08205634711,
            "unit": "iter/sec",
            "range": "stddev: 0.00004561813955119338",
            "extra": "mean: 181.3867433459871 usec\nrounds: 2104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6749481619124478,
            "unit": "iter/sec",
            "range": "stddev: 0.046609076650319096",
            "extra": "mean: 1.4815952638000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.93598573763374,
            "unit": "iter/sec",
            "range": "stddev: 0.00023018271793911397",
            "extra": "mean: 14.506211658536957 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8023018330718423,
            "unit": "iter/sec",
            "range": "stddev: 0.00098664385350265",
            "extra": "mean: 554.8460206000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.29908862754343,
            "unit": "iter/sec",
            "range": "stddev: 0.00004803941056938413",
            "extra": "mean: 10.070585881717966 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.48085617635554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005307350246924926",
            "extra": "mean: 9.663623175824585 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1156.7568689863629,
            "unit": "iter/sec",
            "range": "stddev: 0.000013565952193070878",
            "extra": "mean: 864.4858974351931 usec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 127.76190190509423,
            "unit": "iter/sec",
            "range": "stddev: 0.009543802691659008",
            "extra": "mean: 7.827059437036505 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.25347615676358,
            "unit": "iter/sec",
            "range": "stddev: 0.00006766924405390498",
            "extra": "mean: 7.339262294119167 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5782.960581966799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004597802496257469",
            "extra": "mean: 172.92180809918258 usec\nrounds: 2741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5389.147418626247,
            "unit": "iter/sec",
            "range": "stddev: 0.00004894622139202178",
            "extra": "mean: 185.55810823503342 usec\nrounds: 1700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.039310013823,
            "unit": "iter/sec",
            "range": "stddev: 0.00002556921767078709",
            "extra": "mean: 1.8448846449429992 msec\nrounds: 445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.78242174720476,
            "unit": "iter/sec",
            "range": "stddev: 0.00008172743492684996",
            "extra": "mean: 8.490231268518913 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.81103445675317,
            "unit": "iter/sec",
            "range": "stddev: 0.0011051942546491866",
            "extra": "mean: 17.917603745095956 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.04613193914503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003305199192772398",
            "extra": "mean: 5.207082224998298 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.12611139647255,
            "unit": "iter/sec",
            "range": "stddev: 0.00005738757415781078",
            "extra": "mean: 10.512360752686899 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 736582.1860679372,
            "unit": "iter/sec",
            "range": "stddev: 1.2567891696395733e-7",
            "extra": "mean: 1.3576217547946061 usec\nrounds: 23149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12990216.30688396,
            "unit": "iter/sec",
            "range": "stddev: 3.910013250665812e-9",
            "extra": "mean: 76.98101220001092 nsec\nrounds: 100000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.9198556465467,
            "unit": "iter/sec",
            "range": "stddev: 0.00022507503808043858",
            "extra": "mean: 3.165359764910778 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.72538643540291,
            "unit": "iter/sec",
            "range": "stddev: 0.0009380344626056201",
            "extra": "mean: 21.869689421055376 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1624826.1645009222,
            "unit": "iter/sec",
            "range": "stddev: 9.121786103971939e-8",
            "extra": "mean: 615.4504536226234 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5310.263204413833,
            "unit": "iter/sec",
            "range": "stddev: 0.00004973408551100533",
            "extra": "mean: 188.31458281932447 usec\nrounds: 2270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.56962307324558,
            "unit": "iter/sec",
            "range": "stddev: 0.00020747695385108173",
            "extra": "mean: 9.296304769229197 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9175272557439853,
            "unit": "iter/sec",
            "range": "stddev: 0.006666698190326759",
            "extra": "mean: 1.0898858793999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 689.3182888341182,
            "unit": "iter/sec",
            "range": "stddev: 0.000024172235818251582",
            "extra": "mean: 1.4507086438854753 msec\nrounds: 556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 324.581600031538,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755597472289147",
            "extra": "mean: 3.0808893661958496 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.87673270016727,
            "unit": "iter/sec",
            "range": "stddev: 0.012696208642255563",
            "extra": "mean: 10.652266767676057 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5470.193570092649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008024966762588632",
            "extra": "mean: 182.80888732481603 usec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.42157748727041,
            "unit": "iter/sec",
            "range": "stddev: 0.0006935616227877682",
            "extra": "mean: 26.722550655171258 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 352.33497861809457,
            "unit": "iter/sec",
            "range": "stddev: 0.000033584138306087146",
            "extra": "mean: 2.8382081277372326 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.89667694102671,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148737435117693",
            "extra": "mean: 13.532408240739304 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9258652484895826,
            "unit": "iter/sec",
            "range": "stddev: 0.0018684741976457539",
            "extra": "mean: 1.080070778800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 140.23550638874073,
            "unit": "iter/sec",
            "range": "stddev: 0.0005757121311328291",
            "extra": "mean: 7.130861689392297 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.5849279126886,
            "unit": "iter/sec",
            "range": "stddev: 0.00007420879579121453",
            "extra": "mean: 6.553727249995589 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 89.22880576354866,
            "unit": "iter/sec",
            "range": "stddev: 0.013839020510924229",
            "extra": "mean: 11.207143157893919 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.54766150547944,
            "unit": "iter/sec",
            "range": "stddev: 0.0013411825479485414",
            "extra": "mean: 180.25613116667216 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 309.80909021700415,
            "unit": "iter/sec",
            "range": "stddev: 0.00021560213412246778",
            "extra": "mean: 3.227794249999428 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.78978998075294,
            "unit": "iter/sec",
            "range": "stddev: 0.0006092430787880406",
            "extra": "mean: 9.824168024996283 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5813.931486945821,
            "unit": "iter/sec",
            "range": "stddev: 0.00004483922189633034",
            "extra": "mean: 172.00065089265794 usec\nrounds: 2240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5046711804431707,
            "unit": "iter/sec",
            "range": "stddev: 0.0016759750597368209",
            "extra": "mean: 399.25400499999455 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8486347362858286,
            "unit": "iter/sec",
            "range": "stddev: 0.001154185124512891",
            "extra": "mean: 1.1783632666000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.56764122776865,
            "unit": "iter/sec",
            "range": "stddev: 0.000585307865716942",
            "extra": "mean: 9.472599637254742 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 509965.92535073805,
            "unit": "iter/sec",
            "range": "stddev: 1.2116036102878363e-7",
            "extra": "mean: 1.9609153284353895 usec\nrounds: 2055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 756.9218918514872,
            "unit": "iter/sec",
            "range": "stddev: 0.000011352936370661893",
            "extra": "mean: 1.321140279816621 msec\nrounds: 654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6964773.512973296,
            "unit": "iter/sec",
            "range": "stddev: 8.176133177440317e-9",
            "extra": "mean: 143.57968685376156 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17940382878849104,
            "unit": "iter/sec",
            "range": "stddev: 0.14996763961996823",
            "extra": "mean: 5.574017047200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.80854888603973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490826392066328",
            "extra": "mean: 9.275702254902452 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.1939563100156,
            "unit": "iter/sec",
            "range": "stddev: 0.00004765161627181966",
            "extra": "mean: 13.6623302033909 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.46477623881917,
            "unit": "iter/sec",
            "range": "stddev: 0.013944678547316125",
            "extra": "mean: 12.275243929578059 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 141.80799076830178,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607139045763895",
            "extra": "mean: 7.051788792592704 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.74365136765994,
            "unit": "iter/sec",
            "range": "stddev: 0.00027105842911237976",
            "extra": "mean: 3.5493257617189578 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 300.99479055888565,
            "unit": "iter/sec",
            "range": "stddev: 0.00004115974749775155",
            "extra": "mean: 3.3223166359231833 msec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 133.39861689293105,
            "unit": "iter/sec",
            "range": "stddev: 0.0005496613252112165",
            "extra": "mean: 7.496329596899975 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141205.737271009,
            "unit": "iter/sec",
            "range": "stddev: 3.1974758186211225e-7",
            "extra": "mean: 7.081865222521027 usec\nrounds: 38315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 300.64755299080235,
            "unit": "iter/sec",
            "range": "stddev: 0.00020619858729061587",
            "extra": "mean: 3.3261537972025095 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2426704.199098823,
            "unit": "iter/sec",
            "range": "stddev: 2.3000802028265832e-8",
            "extra": "mean: 412.0815385622811 nsec\nrounds: 92593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7998.823828262482,
            "unit": "iter/sec",
            "range": "stddev: 0.000028414652928095345",
            "extra": "mean: 125.01838038571 usec\nrounds: 3528"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 194.63404597796452,
            "unit": "iter/sec",
            "range": "stddev: 0.00005723113485452164",
            "extra": "mean: 5.137847260870356 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 273.3112007173047,
            "unit": "iter/sec",
            "range": "stddev: 0.008013249429967662",
            "extra": "mean: 3.658832851985217 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 306.0871340459518,
            "unit": "iter/sec",
            "range": "stddev: 0.00020062980882609705",
            "extra": "mean: 3.267043559726602 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.97650389052288,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169541339609845",
            "extra": "mean: 6.290237711408203 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5827.29783896871,
            "unit": "iter/sec",
            "range": "stddev: 0.00004353453521994197",
            "extra": "mean: 171.60612476553553 usec\nrounds: 2661"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.87080059447894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782732739007614",
            "extra": "mean: 7.583179866141401 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.660614023249515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005680943045306523",
            "extra": "mean: 24.593824368422116 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5539.389879644412,
            "unit": "iter/sec",
            "range": "stddev: 0.000054659452289808375",
            "extra": "mean: 180.5252964184194 usec\nrounds: 2429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 184.7219320227411,
            "unit": "iter/sec",
            "range": "stddev: 0.0038559031955915585",
            "extra": "mean: 5.413542339286979 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1737.0095855340385,
            "unit": "iter/sec",
            "range": "stddev: 0.000005326029332231706",
            "extra": "mean: 575.7020619391418 usec\nrounds: 1227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11818.88951479908,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016515784001841149",
            "extra": "mean: 84.61031797850762 usec\nrounds: 5145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6295562.54470103,
            "unit": "iter/sec",
            "range": "stddev: 5.8473470465638503e-8",
            "extra": "mean: 158.84204038949613 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 254.87778461937563,
            "unit": "iter/sec",
            "range": "stddev: 0.003963082069651418",
            "extra": "mean: 3.9234490424238437 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1896161.2654930195,
            "unit": "iter/sec",
            "range": "stddev: 9.44646167180291e-8",
            "extra": "mean: 527.3813035833693 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5300.317236056216,
            "unit": "iter/sec",
            "range": "stddev: 0.00006059980708888468",
            "extra": "mean: 188.66795240053702 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5756566.1477714665,
            "unit": "iter/sec",
            "range": "stddev: 9.570342307570912e-9",
            "extra": "mean: 173.7146719642421 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2533206.617211372,
            "unit": "iter/sec",
            "range": "stddev: 2.4457500100665236e-8",
            "extra": "mean: 394.75658764108863 nsec\nrounds: 113637"
          }
        ]
      }
    ]
  }
}