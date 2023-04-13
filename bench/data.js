window.BENCHMARK_DATA = {
  "lastUpdate": 1681382032098,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ba7ce848bbc55fc4785b4b56112978d41baa80e4",
          "message": "chore(deps): update trinodb/trino docker tag to v413",
          "timestamp": "2023-04-13T06:28:42-04:00",
          "tree_id": "b457d5dd71939524718e20413243a04304aea738",
          "url": "https://github.com/ibis-project/ibis/commit/ba7ce848bbc55fc4785b4b56112978d41baa80e4"
        },
        "date": 1681381944860,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.4184818815636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006322664288857942",
            "extra": "mean: 10.480149969701168 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 291.6395718041825,
            "unit": "iter/sec",
            "range": "stddev: 0.000058395166452818176",
            "extra": "mean: 3.428889961035318 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 247.69551035958943,
            "unit": "iter/sec",
            "range": "stddev: 0.004509115369381353",
            "extra": "mean: 4.037214879463339 msec\nrounds: 224"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.09314998938721,
            "unit": "iter/sec",
            "range": "stddev: 0.0008015013565237051",
            "extra": "mean: 10.516004571429216 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.79981874063822,
            "unit": "iter/sec",
            "range": "stddev: 0.0008243612534332204",
            "extra": "mean: 10.121476058828854 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 263.24846889286374,
            "unit": "iter/sec",
            "range": "stddev: 0.00039086264547179446",
            "extra": "mean: 3.7986925591843717 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.1073439368173,
            "unit": "iter/sec",
            "range": "stddev: 0.010083127188553693",
            "extra": "mean: 11.613411287355078 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.1796561176536,
            "unit": "iter/sec",
            "range": "stddev: 0.0008348012453618615",
            "extra": "mean: 10.082712918602304 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2283.9317770987054,
            "unit": "iter/sec",
            "range": "stddev: 0.00011017103549336642",
            "extra": "mean: 437.8414495682997 usec\nrounds: 1279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.387319426322925,
            "unit": "iter/sec",
            "range": "stddev: 0.022587451021064728",
            "extra": "mean: 28.258710075003535 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.57141202317305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652386365820805",
            "extra": "mean: 11.551157323532212 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 375.34412727955,
            "unit": "iter/sec",
            "range": "stddev: 0.00003797381133026279",
            "extra": "mean: 2.664221782948576 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.450872574075111,
            "unit": "iter/sec",
            "range": "stddev: 0.00010801837584642432",
            "extra": "mean: 64.72126381249765 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.734401398840042,
            "unit": "iter/sec",
            "range": "stddev: 0.0002777570483099066",
            "extra": "mean: 38.85849079998707 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 278.1732175283359,
            "unit": "iter/sec",
            "range": "stddev: 0.00026938429361024707",
            "extra": "mean: 3.5948823861813213 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.288935154770485,
            "unit": "iter/sec",
            "range": "stddev: 0.0007742986600854687",
            "extra": "mean: 23.646847487177578 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 89.55307197088639,
            "unit": "iter/sec",
            "range": "stddev: 0.009206178878794763",
            "extra": "mean: 11.166562776596864 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.81778797431926,
            "unit": "iter/sec",
            "range": "stddev: 0.014936880237592104",
            "extra": "mean: 11.133652058831826 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.35591529270273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002321993832417711",
            "extra": "mean: 13.632165804350308 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 93.72082115524292,
            "unit": "iter/sec",
            "range": "stddev: 0.0008227178616676989",
            "extra": "mean: 10.669987604393265 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 687.3165307016855,
            "unit": "iter/sec",
            "range": "stddev: 0.00003234853227482052",
            "extra": "mean: 1.4549337246102523 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2358.038346353989,
            "unit": "iter/sec",
            "range": "stddev: 0.00007712105149180954",
            "extra": "mean: 424.0813138370736 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.5661195821443,
            "unit": "iter/sec",
            "range": "stddev: 0.000023774479496228177",
            "extra": "mean: 1.3394660884955556 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1775.4211609034646,
            "unit": "iter/sec",
            "range": "stddev: 0.000005479592825398391",
            "extra": "mean: 563.2466380490399 usec\nrounds: 1456"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1903519.9540783989,
            "unit": "iter/sec",
            "range": "stddev: 7.997439279802324e-8",
            "extra": "mean: 525.3425359988707 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 271.96683308264716,
            "unit": "iter/sec",
            "range": "stddev: 0.00028904522238892285",
            "extra": "mean: 3.676918941421482 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 225.40958743947672,
            "unit": "iter/sec",
            "range": "stddev: 0.00816519905812436",
            "extra": "mean: 4.4363685296593856 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1194.1733779330732,
            "unit": "iter/sec",
            "range": "stddev: 0.000028359212072641434",
            "extra": "mean: 837.3993412337187 usec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 243.97934304244592,
            "unit": "iter/sec",
            "range": "stddev: 0.00041514843441403036",
            "extra": "mean: 4.098707650942508 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 94.51789842909689,
            "unit": "iter/sec",
            "range": "stddev: 0.0001018893821372729",
            "extra": "mean: 10.5800067142855 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2263.902873898576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008104960303139969",
            "extra": "mean: 441.71506274822656 usec\nrounds: 1259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 92.70431352466078,
            "unit": "iter/sec",
            "range": "stddev: 0.0007174066865477573",
            "extra": "mean: 10.786984574714364 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2204.959763865053,
            "unit": "iter/sec",
            "range": "stddev: 0.00008301726524750447",
            "extra": "mean: 453.52301497198727 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.661206726118281,
            "unit": "iter/sec",
            "range": "stddev: 0.05274257513311134",
            "extra": "mean: 1.5123863089999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 13054046.55361731,
            "unit": "iter/sec",
            "range": "stddev: 3.6283864801173883e-9",
            "extra": "mean: 76.60459887986107 nsec\nrounds: 126583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.13133687037194,
            "unit": "iter/sec",
            "range": "stddev: 0.00016401101603973046",
            "extra": "mean: 17.50352879487047 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 277.4758724428975,
            "unit": "iter/sec",
            "range": "stddev: 0.0002638515821136654",
            "extra": "mean: 3.603916950313554 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.437474596942856,
            "unit": "iter/sec",
            "range": "stddev: 0.00019148417886961756",
            "extra": "mean: 21.08038019512206 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.41529394882934,
            "unit": "iter/sec",
            "range": "stddev: 0.00025949102003760416",
            "extra": "mean: 3.6708658515620662 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 98.60465295142698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007824610282952564",
            "extra": "mean: 10.141509250000643 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2250.300418289184,
            "unit": "iter/sec",
            "range": "stddev: 0.00008661266367702418",
            "extra": "mean: 444.3851104823866 usec\nrounds: 353"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 83.14782413588884,
            "unit": "iter/sec",
            "range": "stddev: 0.014929590894911611",
            "extra": "mean: 12.026772923915551 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7977855674535778,
            "unit": "iter/sec",
            "range": "stddev: 0.002447832780466389",
            "extra": "mean: 1.2534696549999809 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 171.84768076196738,
            "unit": "iter/sec",
            "range": "stddev: 0.004031961402729323",
            "extra": "mean: 5.819106755273218 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.914341173978779,
            "unit": "iter/sec",
            "range": "stddev: 0.0032526321243260847",
            "extra": "mean: 1.093683658200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 93.51803390205,
            "unit": "iter/sec",
            "range": "stddev: 0.0007194239526560986",
            "extra": "mean: 10.69312471910382 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 113.37041064037068,
            "unit": "iter/sec",
            "range": "stddev: 0.00020470529554884027",
            "extra": "mean: 8.820643714277107 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8050.727278965359,
            "unit": "iter/sec",
            "range": "stddev: 0.000012724293855973809",
            "extra": "mean: 124.21238049048847 usec\nrounds: 3711"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67680.49866301939,
            "unit": "iter/sec",
            "range": "stddev: 6.642299223597954e-7",
            "extra": "mean: 14.775304847840902 usec\nrounds: 12954"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.43441070841436,
            "unit": "iter/sec",
            "range": "stddev: 0.0003602015508617102",
            "extra": "mean: 7.276198114034446 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.16438326828131,
            "unit": "iter/sec",
            "range": "stddev: 0.000846799063776394",
            "extra": "mean: 23.167248649995997 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 97.44910503793221,
            "unit": "iter/sec",
            "range": "stddev: 0.0009307673342824296",
            "extra": "mean: 10.261766894736986 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 96.266751951266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007332912836485493",
            "extra": "mean: 10.387802431583433 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9091522057856178,
            "unit": "iter/sec",
            "range": "stddev: 0.001801712728743305",
            "extra": "mean: 1.0999258360000113 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1887975.131867892,
            "unit": "iter/sec",
            "range": "stddev: 1.2139808630204028e-7",
            "extra": "mean: 529.6679935665452 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.43997336231612,
            "unit": "iter/sec",
            "range": "stddev: 0.00005675235894839887",
            "extra": "mean: 6.351627090908503 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.83720725131488,
            "unit": "iter/sec",
            "range": "stddev: 0.00006231997972042008",
            "extra": "mean: 6.179048792204584 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11756.919823333212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016165861967565588",
            "extra": "mean: 85.05629153099808 usec\nrounds: 5231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1786955576855292,
            "unit": "iter/sec",
            "range": "stddev: 0.0646703717609582",
            "extra": "mean: 5.596110014999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1673273.3878441595,
            "unit": "iter/sec",
            "range": "stddev: 1.8279841989038206e-7",
            "extra": "mean: 597.6309712834178 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.75831168647314,
            "unit": "iter/sec",
            "range": "stddev: 0.0002921416426011998",
            "extra": "mean: 18.262067788460108 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13501.64152942023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016033203688279827",
            "extra": "mean: 74.06506814900904 usec\nrounds: 6251"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6592503518723758,
            "unit": "iter/sec",
            "range": "stddev: 0.0008969737921521949",
            "extra": "mean: 602.6818068000125 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 490872.08260683925,
            "unit": "iter/sec",
            "range": "stddev: 3.366452501290235e-7",
            "extra": "mean: 2.037190615301183 usec\nrounds: 2046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.40099146555085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007692751260828569",
            "extra": "mean: 10.822394696628578 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4692.048898619909,
            "unit": "iter/sec",
            "range": "stddev: 0.000021056518654023585",
            "extra": "mean: 213.1265086120765 usec\nrounds: 2090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2543542.352836508,
            "unit": "iter/sec",
            "range": "stddev: 1.8944719917283876e-8",
            "extra": "mean: 393.15248628922285 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2283.6433580616113,
            "unit": "iter/sec",
            "range": "stddev: 0.00009679212207644135",
            "extra": "mean: 437.8967479619121 usec\nrounds: 1226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.64833455769578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236262745521232",
            "extra": "mean: 9.465364543478804 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.71714152425596,
            "unit": "iter/sec",
            "range": "stddev: 0.0001339226434241992",
            "extra": "mean: 10.557751045980538 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 725966.5678681588,
            "unit": "iter/sec",
            "range": "stddev: 2.3208263198724746e-7",
            "extra": "mean: 1.3774739006736298 usec\nrounds: 22625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.44973397760842,
            "unit": "iter/sec",
            "range": "stddev: 0.00003364468602406458",
            "extra": "mean: 5.142717243908153 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.7864740669943,
            "unit": "iter/sec",
            "range": "stddev: 0.00002279286666653313",
            "extra": "mean: 1.8355815491062037 msec\nrounds: 448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11636.176401943227,
            "unit": "iter/sec",
            "range": "stddev: 0.000011648998162341068",
            "extra": "mean: 85.93888279598454 usec\nrounds: 5981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.62477200552394,
            "unit": "iter/sec",
            "range": "stddev: 0.00026669932854077116",
            "extra": "mean: 3.615005238865704 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140057.0352146776,
            "unit": "iter/sec",
            "range": "stddev: 3.7607324819582034e-7",
            "extra": "mean: 7.139948367943195 usec\nrounds: 40653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.538397318614872,
            "unit": "iter/sec",
            "range": "stddev: 0.00037208894948373666",
            "extra": "mean: 180.55764916665376 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7362235.606121667,
            "unit": "iter/sec",
            "range": "stddev: 5.1327642467078655e-9",
            "extra": "mean: 135.82830725614772 nsec\nrounds: 64936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5730283.041441193,
            "unit": "iter/sec",
            "range": "stddev: 1.2908673112092155e-8",
            "extra": "mean: 174.51144956861512 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.3809158891671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002431895848039278",
            "extra": "mean: 6.313892013983471 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.62932675068461,
            "unit": "iter/sec",
            "range": "stddev: 0.00009797368725610981",
            "extra": "mean: 9.121646822425234 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.88102046696642,
            "unit": "iter/sec",
            "range": "stddev: 0.00046316023179936736",
            "extra": "mean: 17.58055660377522 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.523328431249763,
            "unit": "iter/sec",
            "range": "stddev: 0.0011045483728394385",
            "extra": "mean: 396.3019587999952 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1825.8537590459182,
            "unit": "iter/sec",
            "range": "stddev: 0.004199273908299187",
            "extra": "mean: 547.6889893539667 usec\nrounds: 1315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.321357802167672,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333198618820629",
            "extra": "mean: 96.886477454544 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 97.50316625952894,
            "unit": "iter/sec",
            "range": "stddev: 0.0009357006790769056",
            "extra": "mean: 10.256077195875376 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6470101.986853864,
            "unit": "iter/sec",
            "range": "stddev: 9.90455760876227e-9",
            "extra": "mean: 154.5570691207508 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2153.721349380093,
            "unit": "iter/sec",
            "range": "stddev: 0.00016950777893853837",
            "extra": "mean: 464.3126188482231 usec\nrounds: 1199"
          }
        ]
      }
    ]
  }
}